import { SectionContainerProps } from '@/lib/types';

const SectionContainer = ({ title, children }: SectionContainerProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-15 px-15">
        <div className="text-4xl text-center">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
