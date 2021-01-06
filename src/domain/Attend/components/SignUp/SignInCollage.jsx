import React from 'react';
import signIn from '../../../../assets/img/content/sign-in.jpg';
import signIn2 from '../../../../assets/img/content/sign-in2.jpg';
import poster4 from '../../../../assets/img/content/phyff-poster-4.png';

const SignInCollage = () => (
  <div className="image-collage">
    { /* Theme depends on anchors,
                             but these images should not redirect on click */
            /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a
      data-fancybox="Collage Gallery"
      className="d-none d-lg-block"
    >
      <div data-jarallax-element="0 12">
        <img
          src={signIn}
          alt="Description"
          className="rounded"
          data-aos="fade-right"
        />
      </div>
    </a>
    { /* Theme depends on anchors,
                             but these images should not redirect on click */
            /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a
      data-fancybox="Collage Gallery"
    >
      <div data-jarallax-element="0 6">
        <img
          src={signIn2}
          alt="Description"
          className="rounded"
          data-aos="fade-up"
        />
      </div>
    </a>
    { /* Theme depends on anchors,
                             but these images should not redirect on click */
            /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a
      data-fancybox="Collage Gallery"
      className="d-none d-lg-block"
    >
      <div data-jarallax-element="0 -12">
        <img
          src={poster4}
          alt="Description"
          className="rounded"
          data-aos="fade-left"
        />
      </div>
    </a>
  </div>
);

export default SignInCollage;
