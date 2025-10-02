"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Button from "@/common/components/elements/Button";
import Card from "@/common/components/elements/Card";
import SectionHeading from "@/common/components/elements/SectionHeading";

interface ApiTestResult {
  endpoint: string;
  status: 'loading' | 'success' | 'error';
  response?: any;
  error?: string;
}

const ProductionDebugger = () => {
  const [results, setResults] = useState<ApiTestResult[]>([]);
  const [testing, setTesting] = useState(false);
  const t = useTranslations("DashboardPage");

  const apiEndpoints = [
    { name: 'Health Check', url: '/api/health' },
    { name: 'GitHub API', url: '/api/github' },
    { name: 'Monkeytype API', url: '/api/monkeytype' },
    { name: 'Gemini AI', url: '/api/gemini', method: 'POST', body: { message: 'Hello' } }
  ];

  const testAllApis = async () => {
    setTesting(true);
    setResults([]);
    
    for (const endpoint of apiEndpoints) {
      const result: ApiTestResult = {
        endpoint: endpoint.name,
        status: 'loading'
      };
      
      setResults(prev => [...prev, result]);
      
      try {
        const options: RequestInit = {
          method: endpoint.method || 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        
        if (endpoint.body) {
          options.body = JSON.stringify(endpoint.body);
        }
        
        const response = await fetch(endpoint.url, options);
        const data = await response.json();
        
        result.status = response.ok ? 'success' : 'error';
        result.response = data;
        result.error = response.ok ? undefined : `HTTP ${response.status}`;
        
      } catch (error) {
        result.status = 'error';
        result.error = error instanceof Error ? error.message : 'Unknown error';
      }
      
      setResults(prev => prev.map(r => 
        r.endpoint === result.endpoint ? result : r
      ));
    }
    
    setTesting(false);
  };

  const getStatusColor = (status: ApiTestResult['status']) => {
    switch (status) {
      case 'loading': return 'text-yellow-600 bg-yellow-100';
      case 'success': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="space-y-4">
      <SectionHeading title="🔧 Production Debugger" />
      
      <Card className="p-6">
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Test all API endpoints to diagnose deployment issues
          </p>
          
          <Button 
            onClick={testAllApis}
            disabled={testing}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            {testing ? 'Testing APIs...' : 'Test All APIs'}
          </Button>
          
          {results.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Test Results:
              </h3>
              
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{result.endpoint}</span>
                    <span 
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(result.status)}`}
                    >
                      {result.status}
                    </span>
                  </div>
                  
                  {result.error && (
                    <div className="text-red-600 text-sm">
                      ❌ Error: {result.error}
                    </div>
                  )}
                  
                  {result.response && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-gray-600">
                        View Response
                      </summary>
                      <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-auto">
                        {JSON.stringify(result.response, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default ProductionDebugger;