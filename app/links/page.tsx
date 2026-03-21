import { Metadata } from "next";
// import { useTranslations } from "next-intl"; // Bisa dipakai jika pakai i18n
import Container from "@/common/components/elements/Container";
import Links from "@/modules/links/components/Links";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Links ${METADATA.exTitle}`,
  description: `Links page`,
  alternates: {
    canonical: `${process.env.DOMAIN}/links`,
  },
};

const LinksPage = () => {
  // const t = useTranslations("LinksPage");

  return (
    <Container className="flex justify-center py-10">
      {/* Kita hapus PageHeading agar tidak dobel, karena Links component sudah punya header profil */}
      <div className="w-full max-w-md"> 
        <Links />
      </div>
    </Container>
  );
};

export default LinksPage;