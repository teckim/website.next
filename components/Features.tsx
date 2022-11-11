type FeaturesProps = {
  features?: Array<string>;
};

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {features?.map((feature) => (
        <div
          className="px-2 leading-loose text-xs text-primary-500 font-mono font-semibold tracking-wide bg-primary-50 rounded-md"
          key={feature}
        >
          {feature}
        </div>
      ))}
    </div>
  );
}
