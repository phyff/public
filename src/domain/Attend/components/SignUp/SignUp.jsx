import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-5.svg';
import blob1 from '../../../../assets/img/decorations/deco-blob-1.svg';
import dots5 from '../../../../assets/img/decorations/deco-dots-5.svg';
import useEventInfo from '../../../../hooks/useEventInfo';
import SignInCollage from './SignInCollage';

const SignUp = () => {
  const { signup, isLoaded } = useEventInfo();

  return (
    <section className="bg-primary-3 has-divider">
      <Container>
        <Row>
          <Col md={12}>
            <Row className="align-items-center justify-content-center o-hidden o-lg-visible mb-5 text-light">
              <Col
                xl={4}
                md={4}
                className="mb-4 mb-md-0 layer-2"
                data-aos="fade"
              >
                <h3 className="h1 mb-4">Sign Up</h3>
                <p className="lead">
                  Sign up for the Philadelphia Youth Film Festival using the
                  attached registration form. You can only fill out this form
                  once.
                </p>
                {isLoaded
                  && (signup ? (
                    <a href={signup}>
                      <Button size="lg" className="btn-primary-2">
                        Sign up
                      </Button>
                    </a>
                  ) : (
                    <p className="lead font-weight-bold">
                      There currently isn't a sign-up form available. Check back
                      soon!
                    </p>
                  ))}
              </Col>
              <Col
                xl={6}
                md={6}
                className="mb-lg-n7 layer-3"
                data-aos="fade-left"
              >
                {isLoaded && !signup && (
                  <div className="min-vh-70 h-100 w-100 p-0 m-0">
                    <SignInCollage />
                  </div>
                )}
              </Col>
              <div>
                <div className="decoration top left scale-1 d-none mx-5 my-5 d-md-block">
                  <Svg
                    className="bg-primary"
                    src={blob1}
                    alt="deco-blob-1 decoration"
                  />
                </div>
                <div className="decoration bottom right scale-3 d-none d-md-block">
                  <Svg
                    className="bg-primary"
                    src={dots5}
                    alt="deco-dots-5 decoration"
                  />
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="divider">
        <Svg
          className="bg-primary flip-x"
          src={divider}
          alt="divider graphic"
        />
      </div>
    </section>
  );
};

export default SignUp;
