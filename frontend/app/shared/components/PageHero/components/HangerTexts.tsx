import Text from "@/shared/components/Text";

export const HangerText1 = () => {
  return (
    <div className="absolute transform -translate-y-1/2 left-36 top-[55%] sm:hidden">
      <Text size="60" tag="p" className="p-7 bg-white w-fit rounded lg:p-4">
        Nigerian
      </Text>

      <Text size="60" tag="p" className="p-7 bg-white w-fit rounded ml-10 mt-3 text-error lg:p-4">
        Children in Need
      </Text>
    </div>
  );
};
