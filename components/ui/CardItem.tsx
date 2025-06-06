import { Project } from '@/lib/types';
import Image from 'next/image';
import ImageComingSoon from '@/public/images/image-coming-soon.jpg';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog';
import { useGsapFadeInLeft } from '@/hooks/useGsapFadeInLeft';

const CardItem = (props: Project) => {
  const { title, url, githubUrl, techStack, image, description } = props;
  const imageSrc = image ? `https:${image}` : ImageComingSoon;
  const containerRef = useGsapFadeInLeft();

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="flex flex-col justify-center items-center shadow-xl bg-white rounded-[12px]
      hover:shadow-2xl hover:cursor-pointer opacity-0 w-full max-w-[100%]
      dark:bg-[#192d4b]  dark:border-[#ffffff30] dark:shadow-[0_0_15px_#ffd70050]"
          ref={containerRef}
        >
          <div className="rounded-[12px] py-3 lg:px-3 flex flex-col justify-center items-center">
            <div className="w-full aspect-[16/9] mt-2 max-w-[90%]">
              <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={300}
                className="rounded-[10px] object-cover w-full h-full overflow-hidden"
              />
            </div>
            <div className="text-left my-2 pl-1.5 w-full max-w-[90%] lg:mx-1 lg:my-4">
              <div className="text-xl lg:text-2xl">{title}</div>
              <div className="text-gray-600 mt-1 line-clamp-3 h-[70px] overflow-hidden lg:mt-2 dark:text-gray-400">
                {description}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center rounded-[12px] px-3 lg:max-w-[40%]">
        <DialogHeader>
          <div className="mt-3 w-full max-w-[600px] aspect-[16/9] rounded-[12px] lg:max-w-[700px]">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={400}
              className="w-full h-full object-fill rounded-[12px]"
            />
          </div>
          <DialogTitle className="text-xl font-semibold text-left ml-1.5 capitalize lg:text-4xl lg:mt-4">
            {title}
          </DialogTitle>
          <div className="flex flex-row gap-3 justify-start ml-1.5 lg:text-xl lg:mt-0.5">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px] 
              hover:bg-yellow-600 hover:shadow-md dark:text-black"
              >
                Live Site
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px]
               hover:bg-yellow-600 hover:shadow-md  dark:text-black"
              >
                GitHub
              </a>
            )}
          </div>
        </DialogHeader>
        <div className="mx-1.5 lg:text-[1.2rem] lg:mx-5 lg:my-3">
          {description && (
            <p className="text-black dark:text-[#f0f0f0]">{description}</p>
          )}
          {techStack && (
            <p className="text-gray-600 mt-1.5 lg:mt-2 dark:text-gray-400">
              {techStack}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardItem;
