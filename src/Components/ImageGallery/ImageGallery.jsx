import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React, { useState } from 'react';


import image1 from '../../assets/images/image-1.webp'
import image2 from '../../assets/images/image-2.webp'
import image3 from '../../assets/images/image-3.webp'
import image4 from '../../assets/images/image-4.webp'
import image5 from '../../assets/images/image-5.webp'
import image6 from '../../assets/images/image-6.webp'
import image7 from '../../assets/images/image-7.webp'
import image8 from '../../assets/images/image-8.webp'
import image9 from '../../assets/images/image-9.webp'
import image10 from '../../assets/images/image-10.jpeg'
import image11 from '../../assets/images/image-11.jpeg'
import addImage from '../../assets/images/Add Image.png'

import './ImageGallery.css'

const ImageGallery = () => {

    // selected images state
    const [selectedImages, setSelectedImages] = useState([]);


    // image data state
    const [images, setImages] = useState([
        { id: 1, src: image1, alt: "Image 1" },
        { id: 2, src: image2, alt: "Image 2" },
        { id: 3, src: image3, alt: "Image 3" },
        { id: 4, src: image4, alt: "Image 4" },
        { id: 5, src: image5, alt: "Image 5" },
        { id: 6, src: image6, alt: "Image 6" },
        { id: 7, src: image7, alt: "Image 7" },
        { id: 8, src: image8, alt: "Image 8" },
        { id: 9, src: image9, alt: "Image 9" },
        { id: 10, src: image10, alt: "Image 10" },
        { id: 11, src: image11, alt: "Image 11" },
    ]);

    // handel drag end 
    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const reorderedImages = Array.from(images);
        const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
        reorderedImages.splice(result.destination.index, 0, reorderedImage);
        setImages(reorderedImages);
    };

    //delete the selected image
    const deleteSelectedImages = () => {
        const updatedImages = images.filter(
            (image) => !selectedImages.includes(image.id)
        );
        setImages(updatedImages);
        setSelectedImages([]);
    };
    // handle unselected images

    const handleUnselectedImages = () => {
        setSelectedImages([]);
    }

    // handle image selection
    const handleImageSelection = (imageId) => {
        setSelectedImages((prevSelectedImages) => {
            if (prevSelectedImages.includes(imageId)) {
                // Deselect the image
                return prevSelectedImages.filter((id) => id !== imageId);
            } else {
                // Select the image
                return [...prevSelectedImages, imageId];
            }
        });
    };



    return (
        <>
            {/* dargDrop context */}
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="main overflow-hidden container mx-auto py-10 bg-cyan-300 p-2">
                    <div className="main-gallery">
                        {/* gallery heading start --> */}
                        <div className="gallery-head flex justify-between h-[60px] items-center border-b px-10 bg-white rounded-md">
                            <div className="">
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        {selectedImages.length > 0 && (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedImages.length > 0 ? true : false}
                                                    name=""
                                                    id=""
                                                    className="w-5 h-5"
                                                    onChange={handleUnselectedImages}
                                                />
                                            </>
                                        )}
                                        <span className="label-text ml-3 text-2xl font-bold capitalize">
                                            {selectedImages.length > 0 ? (
                                                <>{selectedImages.length} File selected</>
                                            ) : (
                                                "image gallery"
                                            )}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {selectedImages.length > 0 && (
                                <>
                                    <div
                                        className="delete text-2xl font-bold text-red-500 capitalize cursor-pointer"
                                        onClick={deleteSelectedImages}
                                    >
                                        Delete
                                    </div>
                                </>
                            )}
                        </div>
                        {/* gallery heading close >--- */}

                        {/* gallery image container start --->*/}
                        <Droppable droppableId="image-gallery" direction="horizontal">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="grid bg-white p-3 md:p-10 gallery grid-cols-5 md:gap-10 container gap-2 mx-auto"
                                >
                                    {images.map((image, index) => (
                                        <Draggable
                                            key={image.id}
                                            draggableId={image.id.toString()}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`g1 border rounded-md ${selectedImages.includes(image.id) ? "selected" : ""
                                                        }`}
                                                >
                                                    {/* image card */}
                                                    <img src={image.src} alt={image.alt} />

                                                    <div className="g-overly"></div>
                                                    <input
                                                        type="checkbox"
                                                        name={image.id}
                                                        id={image.id}
                                                        className={`md:w-5 checkInput md:h-5 absolute md:top-3 md:left-3 p-5 top-1 opacity-0 ${selectedImages.includes(image.id) && "opacity-100"
                                                            }   duration-300`}
                                                        checked={selectedImages.includes(image.id)}
                                                        onChange={() => handleImageSelection(image.id)}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    <div className="flex g1 flex-col border-2 border-dashed hover:cursor-pointer rounded-md justify-center items-center relative">
                                        <img
                                            src={addImage}
                                            alt="Icon"
                                            className="md:w-[30px] w-[20px] h-[20px] md:h-[30px] "
                                        />
                                        <p className="text-sm text-center md:mt-4 font-black">
                                            Add Image
                                        </p>
                                        <input
                                            className="hidden"
                                            type="file"
                                            id="file-input"
                                            accept="image/*"
                                        />
                                        <div className="g-overly"></div>
                                    </div>
                                </div>
                            )}
                        </Droppable>
                        {/* gallery image container close <-----*/}
                    </div>
                </div>
            </DragDropContext>
        </>
    );
};

export default ImageGallery;