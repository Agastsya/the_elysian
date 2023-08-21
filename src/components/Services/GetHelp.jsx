import { Center, Text, Box } from '@chakra-ui/react';
import React from 'react';
import '../../styles/GetHelp.scss';

const GetHelp = () => {
  return (
    <>
      <Box
        className="mainbody"
        w={'full'}
        h={'40vh'}
        bgGradient="linear(to-l, #20e3b2, #29ffc6)"
      >
        <Center w={'full'} h={'40vh'} borderRadius={'3xl'}>
          <Text
            fontSize={['xl', '4xl']}
            fontWeight={'extrabold'}
            pt={['10', '6']}
            zIndex={'1'}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={'10px'}
            bgColor={'whiteAlpha.500'}
            px={['0rem', '2rem']}
            width={'full'}
          >
            How Can We Help You Today?
          </Text>
        </Center>
      </Box>

      <Box maxH={'full'} maxW={'full'} h={['full', '120vh']}>
        <div className="maindiv">
          <div className="div1 smalldiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              width="3em"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M104,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm184,16v8a16,16,0,0,1-16,16H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54c1.13,22.88,17,38.31,41.31,40.27A16,16,0,0,1,184,95.7V120a32,32,0,0,0,32,32A40,40,0,0,1,256,192Zm-16,0a24,24,0,0,0-24-24,47.67,47.67,0,0,1-26.49-8H160a8,8,0,0,1,0-16h14.46a47.64,47.64,0,0,1-5.78-16H152a8,8,0,1,1,0-16h16V95.7c-15.43-1.26-28.88-7-38.88-16.6-10.39-10-16.28-23.41-17-38.83v0L103.87,32,40,96l107.22,103.9.09.08H240Z"></path>
            </svg>
            <h2 class="box-heading">Fashionable Footwear</h2>
            <p class="box-content">
              Discover the latest trends in footwear at The Lysian. From stylish
              sneakers to elegant heels, we have the perfect pair for every
              occasion.
            </p>
          </div>
          <div className="div2 smalldiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              width="3em"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z"></path>
            </svg>
            <h2 class="box-heading">Chic Apparel</h2>
            <p class="box-content">
              Elevate your style with our collection of chic apparel. Find the
              perfect outfit that showcases your unique personality and fashion
              sense.
            </p>
          </div>
          <div className="div3 smalldiv">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M9 23c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H9m1-12c-.55 0-1-.45-1-1V5.25S11 3 11.75 1c1.08.67 2.17 1.33 2.71 2.83S15 7.67 15 10c0 .55-.45 1-1 1h-4z" />
            </svg>
            <h2 class="box-heading">Luxury Accessories</h2>
            <p class="box-content">
              Complete your look with our selection of luxury accessories. From
              designer handbags to statement jewelry, redefine elegance with The
              Lysian.
            </p>
          </div>
          <div className="div4 smalldiv">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M6 21V8a2 2 0 012-2l8-3v3a2 2 0 012 2v13h-6v-5H8v5H6m8-2h2v-3h-2v3m-6-6h2V9H8v4m4 0h4V9h-4v4z" />
            </svg>
            <h2 class="box-heading">Home Decor Elegance</h2>
            <p class="box-content">
              Transform your living space into a haven of elegance with our
              curated collection of home decor. Discover pieces that reflect
              your taste and style.
            </p>
          </div>
          <div className="div5 smalldiv">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M176 32c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zM56 64h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-32 72h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80V48zm128-16c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zm80 160v16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zm-128-16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80zm-96 16v16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320h456.4c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4v2c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-2c-48.2-9-86.3-48.2-92.5-98.4z" />
            </svg>
            <h2 class="box-heading">Gourmet Culinary Delights</h2>
            <p class="box-content">
              Indulge your palate with our gourmet culinary delights. Explore a
              world of flavors and treat yourself to the finest ingredients and
              delicacies.
            </p>
          </div>
          <div className="div6 smalldiv">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M7 2v2h1v14a4 4 0 004 4 4 4 0 004-4V4h1V2H7m4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5h-4V4h4v3z" />
            </svg>
            <h2 class="box-heading">Wellness and Self-Care</h2>
            <p class="box-content">
              Prioritize your well-being with our range of wellness and
              self-care products. Rejuvenate your body and mind with products
              that promote relaxation and vitality.
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default GetHelp;
