import { Box, Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import React, { useState } from 'react';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import useStyles from './uploadImages.styles';

function UploadImages() {
  const classes = useStyles();

  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState<number>(-1);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    if (addUpdateIndex) setActiveImage(addUpdateIndex.slice(-1)[0]);
    setImages(imageList as never[]);
  };

  return (
    <ReactImageUploading multiple value={images} onChange={onChange}>
      {({ imageList, onImageUpload, onImageRemove }) => (
        <section style={{width:'calc(76% - 1rem)'}}>
          {images.length > 0 ? (
            <Box>
              <Box className={classes.thumbnailsContainer}>
                <Box className={classes.imageCounterContainer}>
                  <span>
                    {activeImage + 1}/{images.length}
                  </span>
                  <PhotoLibraryOutlinedIcon />
                </Box>
                <Box className={classes.carrouselContainer}>
                  <Button
                    id="lmsBuildingsAddMoreButton"
                    variant="outlined"
                    color="secondary"
                    onClick={onImageUpload}
                    className={classes.addMoreButton}
                  >
                    <AddIcon style={{ fontSize: 92 }} />
                    Add more photos
                  </Button>
                  {imageList.map((image, index) => (
                    <figure key={index} className={classes.thumbnail}>
                      <img
                        src={image.dataURL}
                        alt={image.file?.name}
                        className={activeImage === index ? 'active' : ''}
                        onClick={() => setActiveImage(index)}
                      />
                      <IconButton
                        id="lmsBuildingsRemoveButton"
                        color="secondary"
                        size="small"
                        className={classes.removeButton}
                        onClick={() => onImageRemove(index)}
                      >
                        <Close />
                      </IconButton>
                    </figure>
                  ))}
                </Box>
              </Box>

              <Box>
                <figure className={classes.selectedImage}>
                  <img
                    src={imageList[activeImage]?.dataURL}
                    alt={imageList[activeImage]?.file?.name}
                  />
                </figure>
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="800px"
            >
              <Button
                id="lmsBuildingsUploadButton"
                variant="outlined"
                color="secondary"
                onClick={onImageUpload}
              >
                Upload a photo
              </Button>
            </Box>
          )}
        </section>
      )}
    </ReactImageUploading>
  );
}

export default UploadImages;
