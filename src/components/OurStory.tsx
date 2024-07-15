import Image from "next/image";
import homeBig from '@/asstes/home-big.jpg'
import homeSmall from '@/asstes/home-small.jpg'
import { Button } from "./ui/button";

export function OurStory() {
    return (
        <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">
            {/* left  */}
            <div>
                <div className="relative h-fit w-fit">
                    <Image
                        src={homeBig}
                        alt="a picture of room"
                        width={400}
                        height={400}
                        className="object-cover"
                    />
                    <Image
                        src={homeSmall}
                        alt="a picture of room"
                        width={250}
                        height={250}
                        className="object-cover absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
                    />
                </div>
            </div>
            {/* right */}
            <div>
                <p className="text-3xl font-semibold mb-1">Our Story</p>
                <p className="text-2xl mb-2">Effiency. Transparant. Control.</p>
                <p className="text-muted-foreground mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
                <Button>Read More</Button>
            </div>
        </div>
    )
}