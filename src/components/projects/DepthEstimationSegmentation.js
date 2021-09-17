import React from 'react';
import Navbar from '../Navbar';
import depth from '../../images/depth.gif';
import mask_map from '../../images/mask_map.png';
import masknet from '../../images/masknet.png';
import depthnet from '../../images/depthnet.png';
import encoder from '../../images/encoder.png';
import decoder from '../../images/decoder.png';

const DepthEstimationSegmentation = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">
            MONOCULAR DEPTH ESTIMATION AND SEGMENTATION
          </p>
        </p>
        <hr />
        <img class="gif" src={depth} height="500vh" />
        <br />
        <br />
        <a
          href="https://github.com/rvk007/Monocular-Depth-Estimation"
          target="_blank"
          rel="noopener noreferrer"
          class="col mb-4"
        >
          <button type="button" class="btn btn-light">
            GitHub
          </button>
        </a>
        <br />
        <br />
      </div>
      <div>
        Depth estimation is a computer vision task designed to estimate depth
        from a 2D image. Depth information is important for autonomous systems
        to perceive environments and estimate their own state. The depth image
        includes information about the distance of the objects in the image from
        the viewpoint, which is usually the camera taking the image.
        <br />
        <br />
        <p style={{ textAlign: 'center' }}>
          <img class="gif" src={mask_map} height="310vh" />
        </p>
        <br />
        In this project I made a DepthNet Architecture which takes background
        and a background-foreground image as input and produces their
        corresponding depth mappings and segmentation masks of the forground.
        The project is divided into two segments focusing on the two different
        outputs of the model.
      </div>

      <br />
      <div>
        <a
          href="https://colab.research.google.com/drive/11drXRdxWF1AFUgtp-0ybKsTYfiHCLsFU?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>MaskNet</h4>
        </a>
        <p style={{ textAlign: 'center' }}>
          <img class="gif" src={masknet} height="310vh" />
        </p>
        <ul>
          <li>
            The motive of this architecture is to produce Segmentation masks of
            the given image. A image is a matrix for the computer and in this
            particular image we require only two pixel values, i.e., 0(Black)
            and 1(White). We know the power of deep learning, it is a machine
            learning technique that teaches computers to do what comes naturally
            to humans: learn by example. Deep learning is a key technology
            behind driverless cars, it is the key to voice control in consumer
            devices like phones, tablets, TVs, and hands-free speakers. Deep
            learning is getting lots of attention lately and for good reason.
            It’s achieving results that were not possible before.
          </li>
          <li>
            So we now know that predicting two different numbers won't be that
            difficult for a model to learn.
          </li>
          <li>
            Taking this into consideration I created a pretty small fully
            convolutional network for MaskNet which takes background and a
            background-foreground image as input and outputs segmentation masks
            of the forground.
          </li>
        </ul>
        <br />
        <br />
      </div>
      <div>
        <a
          href="https://colab.research.google.com/drive/1BFIp-rdOjE4C-PcV6Jm_A7F4NuQRIhj_?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Depthnet</h4>
        </a>
        <h5>Architecture</h5>
        <p style={{ textAlign: 'center' }}>
          <img class="gif" src={depthnet} height="450vh" />
        </p>
        In the architecture bg denotes the background image and bg_fg denotes
        background-foreground image. DepthNet follows a encoder-decoder model,
        since we want images as an output, we convolve the images to get the
        features by encoding and then convolve up, namely UpSample, decoding the
        image to reach it's initial dimension.
        <p style={{ textAlign: 'center' }}>
          <img class="gif" src={encoder} height="310vh" />
        </p>
        The model is fully convolutional and includes efficient residual
        up-sampling blocks — decoder — that track high-dimensional regression
        problems. The first section of the network is proprietary for combining
        the the inputs together by concatenating them. The second part is a
        sequence of convolutional and interpolate layers that guide the network
        in learning its upscaling. In the end a final convolution is applied
        that yeilds the final predictions.
        <p style={{ textAlign: 'center' }}>
          <img class="gif" src={decoder} height="310vh" />
        </p>
      </div>
    </div>
  );
};

export default DepthEstimationSegmentation;
