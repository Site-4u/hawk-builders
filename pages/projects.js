import React, { Component } from "react";
import Link from 'next/link';
import BackBtn from "../components/back";
import Image from "../components/houseImage";
import Footer from "../components/footer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
import Head from 'next/head'




export default class Index extends Component{
  render(){
    return(
      <div>
        <Head>
          <title>Projects - Hawk Builders</title>
          <link rel="shortcut icon" href="https://i.ibb.co/PN3RFY5/favicon.png" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Take A look at our projects - Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." />
          <meta name="author" content="Site 4 u" />
        </Head>

        <BackBtn />


        <div class="container-project">


          {/* House Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Houses</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/11/kelly-clarkson-house-for-sale-1.jpg" />
              <Image id="2" link="https://i.pinimg.com/736x/1d/b1/de/1db1de099e4a0fea289b39788a99b16b.jpg" />
              <Image id="3" link="https://images.mansionglobal.com/im-147203?width=1280" />
              <Image id="4" link="https://www.insauga.com/sites/default/files/imagecache/lead-image-full/article/2019/12/goldhousecover.jpg" />
              <Image id="5" link="https://cdn.shopify.com/s/files/1/2829/0660/collections/WYNNCHESTER.jpg?v=1585072949" />
              <Image id="6" link="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/11/kelly-clarkson-house-for-sale-1.jpg" />
              <Image id="7" link="https://i.pinimg.com/736x/1d/b1/de/1db1de099e4a0fea289b39788a99b16b.jpg" />
              <Image id="8" link="https://images.mansionglobal.com/im-147203?width=1280" />
              <Image id="9" link="https://www.insauga.com/sites/default/files/imagecache/lead-image-full/article/2019/12/goldhousecover.jpg" />
              <Image id="10" link="https://cdn.shopify.com/s/files/1/2829/0660/collections/WYNNCHESTER.jpg?v=1585072949" />
              <Image id="11" link="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/11/kelly-clarkson-house-for-sale-1.jpg" />
              <Image id="12" link="https://i.pinimg.com/736x/1d/b1/de/1db1de099e4a0fea289b39788a99b16b.jpg" />
              <Image id="13" link="https://images.mansionglobal.com/im-147203?width=1280" />
              <Image id="14" link="https://www.insauga.com/sites/default/files/imagecache/lead-image-full/article/2019/12/goldhousecover.jpg" />
              <Image id="15" link="https://cdn.shopify.com/s/files/1/2829/0660/collections/WYNNCHESTER.jpg?v=1585072949" />
            </div>
          </div>


        {/* Basement Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Basements</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://uc52ad8a46ab2545731daed88cc2.previews.dropboxusercontent.com/p/thumb/ABIN1NjFYP1qCs3hxl9ylycsb4dUK4Lg3FR2ViDgr7LIgDexCMZJ2-rWVdkWBP6Jn_cilTKPtRPaDGl628iu4_lJHf1tlaCkGrZOiqFROOwQSVqCZxrZgfKxtR4k0PxJYfQyXL_RiCniisPxhJWgER-emBsUgzKYCi2yE0T1ENT5meOaDlvuukaBU9NAhKZry0U65gznejpiQw-NO6eMU19ptlAi_mAMktFnxSTGdJAkD_dBo2cug4O-cBfDXtYcIJOtYDko5aft0vmrwiq5qs1z5D675TYQGSe0QwHGuTymW348eyC20U6qvWissIpjGqxxHL7sJEi2d2nLGslSKHclzutP6BpD_eX87Hej6aR93w/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="2" link="https://uce1387bb6ac4ca0b9bde638cf76.previews.dropboxusercontent.com/p/thumb/ABKTSLY58f1F4HiHRTjZeWXVjZn6nhTeCgezMaTVwpJRvzEbMGCnGL-Upwp9okC30D2b5DwIZ0meKSE7L4i0sR16VVeCCku133aS2khgBn5EEYIgc4RbEG2qqz4Nuwp0gUaiMvfuKo4mpH9-_iit314af_3EvHpfM7nD4_bVx3M-qg8qVpS1N1EtYoXJvdgMeWA0Za5Mfibr2LoCzCfDWn7Uo-w1kvO00uv1Aj3UVUeBtj16KNDNeY_TvxUiwz8Dv96yfnM-g_SsO_6cElwQHUpnac2e5003Ons9fOQcrvve6etDC4z8B5qrqBgBy0Vo7PMMO_rSz3WPfyoAwYtl6daxFcfSBeQYOacT_mUiM6Gqeg/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="3" link="https://ucf4e196de321390b82dcfdd4c08.previews.dropboxusercontent.com/p/thumb/ABJm50SoBLPVWuJJ91BjW3rOP1R_n6ZypSpldJaYt9m2sRkFkfgJbNBd2RhOOribZs7phxLBIGaeg-mGv3WjJ5Cfsm6C54MO7Z3F44cNHLc3TEj4jlE0M6xp1XmJ4VGLSOi-X9Q7FMPTPdnEgXnOPZLyw4_UYNMwp0Cgekq1jY-oaNryYDE09NjybVmA2norp17wwrbgR5ZDquvtKavbc4wQfn73QLo-aryUsnCqKPMyh4-FEoLdVNMl65ZpZwZMtVN6Gl_tOEvQDzpKXjg2GUGTL5Exn54-6xCdFcMrs-S41u39Lj_JSqaFQvyVS8qFmozsGTuSdA-Vvge3_Tin_EXH7UrJdSFUGbOrbSJrJVvW2w/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="4" link="https://uc72741eee1f6a36b70024b4c219.previews.dropboxusercontent.com/p/thumb/ABIS_s0cj0CwRmf4BZra8Ed-AK4W7ylUfUgVwmx8gSRENEEnZuwPIYfX9T1SWFP2LAZCr7mNmjlEjdqdMz0jX1r9jQu03tDXU_MKSFoHfLSB8_fIdG4r0XAF4G1Gi4B0oBAGtPwxfVmn-nQHS4rIBAYdkw2fs_osuNH21Ah5wjbci3SyKu9QbA3Zhkyi8uT7_AwxSG3IAa72ms570YTq6h2DD4wslFszeOj8NCjzheRt8dxHeIWFdQ4D3sjTEswU4ElJKeL0Ov4ncOKtvHJ6_xmeXWf9HZYGvC2gPjr9TQb5EwoizF2vKrg-wU76SEqRu-HwtqtrvnCSrmXUzQDQ75uH39LPp_be0_S9kmRQ33Z-hA/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="5" link="https://ucd13540e6f3ee6c0513d11a28d1.previews.dropboxusercontent.com/p/thumb/ABLTi9cWUvJwhTIIf6-NRGNcCTfiUnxZ6akHoiy3eDyYNDrWJRL--UCqjgXM5Sd2aQIufP6hbh2iEYwgLOCUSvuRaxU1s8vSq-DcXHXkmgcKDBVtXkfFWr1KkBuG5yhydriTneqzLaC1LMFktdYYGoTKShN3m1I5fnnGfAoAEbI1xL9aKZYGFhW6B-rMrM2mPFxm7h8uJxaPSe16IrBUXYN0aUWA87TfqpKJIkzoi7lXcfi_caKk2-wcdLGi0qwHYKvKK7ip52jj95Bz71tGzERi7QRHY6ZEyhAzCeNgciHiR8cbrfIEX-MeHOOxf-9HNWlVknK985joef6k89YMcWK7KL4FkmON63CMs7fHVpqkiQ/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="6" link="https://uc25f50e81a91abd32fccd64be15.previews.dropboxusercontent.com/p/thumb/ABLVIxXslJ5RBaxuqXZMjl9O_J5Bg60QjDq7RWgAvnKkcYX84MbuLo8gka5FOmLo4p7ZtrMaN72pNw9TycI5bnCmukPy9KU5xmAYGaHDHIc3_VAyTJFRVaXv81_5M5UHcccUDl-UB9TYPBoAZa2dA9ncMr0bUoJRcAKcDYx95hQ_rFzZJbww91s45Y9zkwjb9P9Ty38qYfE37k_EnQv3dEj5rmwtBemWNRksd6diGLVqRTj2XUlGJ_QsrLwQFhHZOCHHK7QPcduL3TobWhtTPtjYCSAwR9st2Pe2bh1V-pykllrt9IfdTBtBRreTklSvFjJYYL2pjEqfNQQGGyI-B1Hq1B-0TVU_fMQFaQa6rzspNQ/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="7" link="https://uc490009d854793f70fe5d8f0b0c.previews.dropboxusercontent.com/p/thumb/ABLF1Rt6F79sxYbbW1W51hWJSn5PxHXm9h-zpIsunIkfnVsI-uCslpWD8Z8v3b2UdOSxJUK3cIp0G0V9fYbhLetzG7rOhxkDqYy2x5NI5H2UBEJ8PqiFNu5n6uPPMpHVdD_MLHzVQGmpg6Z3YqWucKfsOred0IrCRE0WsLVJbsr_hz5Utm3lfWi8CbAWJBYBaS32nHWbM4w_cWbFXQiCDwUnDF5R4gC8v5-WPLSOJCJwi8ej5SFvz7yeGOPeC603s3xAw5EB4Zt-lKre18kOi4dpIx4ZI7xDtvZM9h9_zuTSYQMo0zTF9NymHMNQ4q4sQ1tQrIcVm8XmJukpAegsl3hI5HaSq0Qo9FOCoLAKcfMkfg/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="8" link="https://uc030284841c9a82e52902ea2e1b.previews.dropboxusercontent.com/p/thumb/ABIsAjZOYoIrKI7PhR4RI097RNkxptzkw_-tbjiR915_XnMsrbNgk6XGk_R0A1kTRvs4oO6f1kos4JjHLBmv_xVYWhEQjSIaMO5iS3q-z1NtPSDIjX6x_xlYi1Ps63cukiqsbKVZxd8P5J9HHUotzlHhs6A5gpgmzkvR4fEwdbObrppAEkxkaRa3ioUjbx6o4jjzXFBSUYK4gsedzA1YzUDmQdfoTamdLxB7A078ejUOfGfmojmbT7jwM0uCBBxPPU4svqhZ71DrEhtVfg4czsxY189cPgeYUJrrItjZ1ShctSM1aEckestfQeDo44Q8Yp0bqU3d6lfJy7X1Ak8zyNt0R6Mf_s-wY5_TXO56Ppl51Q/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="9" link="https://uc667a824c9e5fe569f392c5fa77.previews.dropboxusercontent.com/p/thumb/ABKuUxWC8bjaX97KIhUa8W1eY8qFFMc9xb17dIV2xILwzXmUfsRbNwWv3znC8Ct1R4_s7471PIFW6L3QzfaOPO5JeWQ1AJPHDCEuMqF-SIjM7HDvpgPDFm_1x-U-dnedJentFXIuQunys-kWw1oxNJLRkfj-dS9Hs7k-FthvuHT582G5ZL5X3YbsqvXNW6RWIWWMAWClYrUszMPBV4AyXl5HvZGMU7w6hj41SxbhBaHIt1XGK_ug-274jVmPACZ3iNu0nA0ld2J3GqkGTp2G00vs1QaFjDFq5mVh-aWfoa7kkEwk9SQzYAvkAHCZ4Lb4NVf2iaFvdIiaD_DpBa0X8G67LK7Z1orlhfD9wvoqFr10Qw/p.jpeg?fv_content=true&size_mode=5" />
              <Image id="10" link="https://uc42b00b5a8e6e920c0bfbca86e9.previews.dropboxusercontent.com/p/thumb/ABKYruTHTm2PcACMJ5d_aaITgrz26sEkzS_eDUs5m2vo953RePdlUR0o0QTX_qhBU2ofjnoInY6BeIXI9NAFtb9knibamaabO9M6z8OzkE3Ma1KN_l5IGhXYPvUoLIEObehJxztLjvzKZUJkV4ptE_Ua0e_kq1jxuxJLpbeiFw7_gd90WZfWZd_yuaH2mTSm0z12JztIdl1vtc61RBB6tTlyvQ8ID5l4gprrxH8T3cKTd5cj0e4GKsjL0ez2qlIJCelhqOCmhzDOnGn2KmjXxmqE8mcgUFSHQXOdFrqFu_YSYIUq1u_ztCUSzogzGm15qouy_jqOJJ2SBJTTvXqIbh7JW0DBNJqBYAr0HP3XC_XTQQ/p.jpeg?fv_content=true&size_mode=5" />
            </div>
          </div>


          {/* Washroom Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Washrooms</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://static3.mansionglobal.com/production/media/article-images/2f7d1544a38d1abf2951cfa1d5c5468f/large_B3-CV891_0110_d_IM_20190109141426.jpg" />
              <Image id="2" link="https://i.pinimg.com/originals/77/b7/a6/77b7a63004e2d65207eb611f5a6ef798.jpg" />
              <Image id="3" link="https://i.pinimg.com/originals/70/77/3c/70773c54b856ee727354c3fbf67635c2.jpg" />
              <Image id="4" link="https://i.pinimg.com/originals/a5/36/40/a53640825fd03fbf29e9f8805827763f.jpg" />
              <Image id="5" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvH6GoUQHNOlUr1KVcgNhrrNjQLJ9Rxvoo83U0cDCyxPfBhqKY7FvobV2x3R4VpFf3oY&usqp=CAU" />
              <Image id="6" link="http://polygonengineering.ca/wp-content/uploads/2019/01/9e870a6fbf14dc3a4f80ff9d2b19e805.jpg" />
              <Image id="7" link="https://moosebasements.ca/wp-content/uploads/2021/04/Basement-Renovations-Brampton.jpg" />
              <Image id="8" link="http://polygonengineering.ca/wp-content/uploads/2019/09/2-1.jpg" />
              <Image id="9" link="http://polygonengineering.ca/wp-content/uploads/2019/01/9e870a6fbf14dc3a4f80ff9d2b19e805.jpg" />
            </div>
          </div>


          {/* Kitchen Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Kitchens</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://static3.mansionglobal.com/production/media/article-images/2f7d1544a38d1abf2951cfa1d5c5468f/large_B3-CV891_0110_d_IM_20190109141426.jpg" />
              <Image id="2" link="https://i.pinimg.com/originals/77/b7/a6/77b7a63004e2d65207eb611f5a6ef798.jpg" />
              <Image id="3" link="https://i.pinimg.com/originals/70/77/3c/70773c54b856ee727354c3fbf67635c2.jpg" />
              <Image id="4" link="https://i.pinimg.com/originals/a5/36/40/a53640825fd03fbf29e9f8805827763f.jpg" />
              <Image id="5" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvH6GoUQHNOlUr1KVcgNhrrNjQLJ9Rxvoo83U0cDCyxPfBhqKY7FvobV2x3R4VpFf3oY&usqp=CAU" />
              <Image id="6" link="http://polygonengineering.ca/wp-content/uploads/2019/01/9e870a6fbf14dc3a4f80ff9d2b19e805.jpg" />
              <Image id="7" link="https://moosebasements.ca/wp-content/uploads/2021/04/Basement-Renovations-Brampton.jpg" />
              <Image id="8" link="http://polygonengineering.ca/wp-content/uploads/2019/09/2-1.jpg" />
              <Image id="9" link="http://polygonengineering.ca/wp-content/uploads/2019/01/9e870a6fbf14dc3a4f80ff9d2b19e805.jpg" />
            </div>
          </div>





        </div>

        <Fade triggerOnce keyframes={up}>
          <Footer />
        </Fade>
      

      </div>
    )
  }
};
