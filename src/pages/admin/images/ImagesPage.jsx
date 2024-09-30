import { Avatar, Button, Clipboard } from "flowbite-react";
import React from "react";

export default function ImagesPage() {
    const images = [
        {
            src: '/images/img27.jpg',
            id: '1'
        },
        {
            src: 'data:image/jpeg;base64,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',
            id: '1'
        },
    ]

    const deleteImage = (id) => {
        console.log(id);
    }
  return (
    <main>
      <h1 className="font-bold text-lg mb-5">Images Page</h1>

      <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
            {
                images.map((img, index) => 
                    <div key={index} className="relative">
                        <Clipboard valueToCopy={`${img.src}`} img={img.src} label={<i className="fa fa-clipboard"></i>} className="absolute start-0 top-0 w-12 h-12 z-30"/>
                        <Avatar img={img.src} className='[&>*>img]:h-auto [&>*>img]:w-auto' />
                        <Button valueToCopy={img.src} onClick={()=>deleteImage(img.id)} color={"failure"} label="Click Copy" className="absolute end-0 top-0 w-12 h-12 flex items-center z-30">
                            <i className="fa fa-remove"></i>
                        </Button>
                    </div>
                )
            }
        <div>
        </div>
      </section>
    </main>
  );
}
