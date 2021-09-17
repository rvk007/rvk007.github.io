import React from 'react';
import Navbar from '../Navbar';
import objectDetection from '../../images/LEGO_Batman.gif';
import maskHelmetDetection from '../../images/mask_helmet.gif';
import batman from '../../images/object_detection_batman.png';

const Publication = () => {
  return (
    <div class="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">OBJECT DETECTION</p>
        </p>
        <hr />
        <img class="gif rounded" src={objectDetection} height="350vh" />
        <br />
        <br />
        <a
          href="https://github.com/rvk007/EVA4/tree/master/S13"
          target="_blank"
          rel="noopener noreferrer"
          class="col mb-4"
        >
          <button type="button" class="btn btn-light">
            GitHub
          </button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=wl-N1aCklsY"
        >
          <button type="button" class="btn btn-danger">
            YouTube
          </button>
        </a>
        <br />
        <br />
      </div>
      <div>
        <p>
          Object detection with Yolo v3 using transfer learning on a class that
          doesn't belong to COCO dataset. <br />
          Class selected: LEGO Batman
        </p>
        <div>
          <h5>Parameters and Hyperparameters</h5>
          <ul>
            <li>Number of images: 500</li>
            <li>Batch size: 10</li>
            <li>Epochs: 300</li>
          </ul>
        </div>
        <div>
          <h5>Dataset Preparation</h5>
          For using the LEGO Batman dataset, follow the instructions mentioned
          <ul>
            <li>
              The dataset can be downloaded from this{' '}
              <a
                href="https://drive.google.com/drive/folders/1uxV3Ml93Nb3sNegLYVIpxc-bi_S4iBSQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </li>
            <li>
              Keep the directory structure same as the one present in the link
              above.
            </li>
            <li>
              If using another dataset: Update the files batman.names,
              batman.data, batman.shapes and batman.txt accordingly.
            </li>
            <li>
              You can access the tool used to annotate the dataset from this{' '}
              <a
                href="https://github.com/miki998/YoloV3_Annotation_Tool"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </li>
          </ul>
        </div>
        <div>
          <h5>Train Data</h5>
          Annotating the images:
          <ul>
            <li>
              Clone the annotation tool from this{' '}
              <a
                href="https://github.com/miki998/YoloV3_Annotation_Tool"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </li>
            <li>
              Follow the steps mentioned in the README of the tool specified
              above.
            </li>
            <li>Annotate atleast 500 images with the tool.</li>
          </ul>
          Creating dataset directory:
          <ul>
            <li>
              Place the annotated images in YoloV3/data/train/images folder.
            </li>
            <li>Place the labels in YoloV3/data/train/labels folder.</li>
          </ul>
        </div>
        <div>
          <h5>Test Data</h5>
          <ul>
            <li>
              Download a short-duration video containing the class used during
              training.
            </li>
            <li>
              Extract frames from the video into the test directory <br />
              <code>ffmpeg -i video.mp4 data/test/img%3d.jpg</code>
            </li>
            <li>
              Extract audio from the video (this audio will be required later){' '}
              <br />
              <code>ffmpeg -i video.mp4 -f mp3 -ab 192000 -vn audio.mp3</code>
            </li>
          </ul>
        </div>
        <div>
          <h4>Downloading Pre-Trained Weights</h4>
          Download the file named `yolov3-spp-ultralytics.pt` from this{' '}
          <a
            href="https://drive.google.com/open?id=1LezFG5g3BCW6iYaV89B2i64cqEUZD7e0"
            target="_blank"
            rel="noopener noreferrer"
          >
            link{' '}
          </a>
          and place it in YoloV3/weights directory.
        </div>
        <br />
        <div>
          <h5>Inference on a Video</h5>
          <ul>
            <li>
              Combine the images from the YoloV3/output directory to form a
              video <br />
              <code>
                ffmpeg -framerate 24 -i YoloV3/output/img%3d.jpg -r 24 -y
                out_video.mp4
              </code>
            </li>
            <li>
              Combine the audio file extracted earlier with the output video to
              produce final output <br />
              <code>
                ffmpeg -i out_video.mp4 -i audio.mp3 -shortest result.mp4
              </code>
            </li>
          </ul>
        </div>
        <div>
          <h4>Results</h4>
          After running the algorithm for 300 epochs, the result is pretty
          amazing!
          <br />
          <br />
          <p style={{ textAlign: 'center' }}>
            <img class="rounded" src={batman} height="350vh" />
          </p>
        </div>
        <div>
          <h3>Mask and Helmet Detection</h3>
          As a part of assignment I did mask and helmet detection on images of
          construction workers using YoloV3. It also gave pretty good results
          apter 200 epochs.
          <p style={{ textAlign: 'center' }}>
            <img class="gif rounded" src={maskHelmetDetection} height="250vh" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication;
