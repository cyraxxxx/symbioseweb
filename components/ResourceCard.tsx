/* import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit bg-blue sm:max-w-[356px] p-3">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit aspect-video">
            <Image 
              src={image}
              className="h-full rounded-md object-cover object-top"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white-100 paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-3 p-0">

        <Link href={downloadLink} target="_blank" className="flex-center text-grey-300 body-semibold gap-1.5">
          Aperçu
          <Image src="/arrow-grey.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ResourceCard */

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: Props) => {
  return (
    <article
      className="w-full max-w-fit sm:max-w-[356px]"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <Card className="bg-blue p-3 h-full flex flex-col justify-between">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <Link
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            title={`Accéder à ${title}`}
            className="block w-full"
          >
            <div className="h-fit aspect-video">
              <Image
                src={image}
                className="h-full rounded-md object-cover object-top"
                width={384}
                height={440}
                alt={title}
                loading="lazy"
              />
            </div>
          </Link>

          <CardTitle className="text-white-100 paragraph-semibold line-clamp-1 w-full text-left" itemProp="name">
              {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-between mt-3 p-0">
          <Link
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center text-grey-300 body-semibold gap-1.5"
            title={`Voir un aperçu de ${title}`}
          >
            Aperçu
            <Image src="/arrow-grey.svg" width={13} height={10} alt="" aria-hidden="true" />
          </Link>
        </CardContent>
      </Card>
    </article>
  );
};

export default ResourceCard;
