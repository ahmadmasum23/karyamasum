import Stack from "@/common/components/elements/StackImages";

const images = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  img: `/images/masum-${i + 1}.jpg`,
}));

const StackImagesPersonal = () => {
  return (
    <div className="flex items-center justify-center pb-2">
      <Stack
        randomRotation={true}
        sensitivity={100}
        sendToBackOnClick={true}
        cardDimensions={{ width: 100, height: 150 }}
        cardsData={images}
      />
    </div>
  );
};

export default StackImagesPersonal;
