import React from "react";

import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const DetailPagePage = () => {
  const navigate = useNavigate();

  const handleNavigate2 = () => navigate("/page");
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-end mx-[auto] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] pb-[12.89px] 2xl:pb-[12px] 3xl:pl-[106px] lg:pl-[69px] xl:pl-[79px] pl-[89px]  w-[100%]">
          <Image
            src={"images/img_mainlogowith_2.png"}
            className="absolute lg:h-[30px] ml-[40px] xl:h-[34px] h-[38.11px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] left-[0] my-[auto] object-contain w-[6%]"
            alt="mainlogowith"
          />
        </Stack>
        <Column className="bg-teal_900 items-start justify-center 3xl:pb-[114px] lg:pb-[73px] xl:pb-[84px] pb-[95px] xl:pl-[112px] pl-[126px] 3xl:pl-[151px] lg:pl-[98px] lg:pr-[385px] xl:pr-[441px] pr-[496px] 3xl:pr-[595px] 3xl:pt-[115px] lg:pt-[74px] xl:pt-[85px] pt-[96px] w-[100%]">
          <Row className="bg-amber_300 font-inter items-center justify-start xl:ml-[3px] lg:ml-[3px] ml-[4px] 3xl:pb-[11px] pb-[9.67px] 2xl:pb-[9px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pr-[36px] xl:pr-[41px] pr-[47px] 3xl:pr-[56px] pt-[10px] 3xl:pt-[12px] lg:py-[7px] xl:py-[8px] rounded-radius5 w-[32%]">
            <Image
              src={"images/img_group.svg"}
              className="lg:h-[12px] xl:h-[13px] h-[14.33px] 2xl:h-[15px] 3xl:h-[18px] mb-[0] object-contain lg:w-[11px] xl:w-[12px] w-[14.33px] 2xl:w-[14px] 3xl:w-[17px]"
              alt="Group"
            />
            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] ml-[13.67px] 2xl:ml-[13px] 3xl:ml-[16px] my-[1px] text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[auto]">{`Starts on 17th Jun'22 09:00 PM (India Standard Time)`}</Text>
          </Row>
          <Text className="font-poppins font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left text-white_A700 w-[auto]">{`Data Sprint 72 - Butterfly Identification`}</Text>
          <Text className="font-inter font-medium lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_50 text-left w-[auto]">{`Identify the class to which each butterfly belongs to`}</Text>
          <div className="3xl:mt-[28px] bg-transparent border-0 lg:mt-[18px] mt-[24px] w-[7%] xl:mt-[21px] input-wrap">
            <Image
              src={"images/img_vector_7.svg"}
              className="absolute left-[21.119995px] bg-transparent border-0 lg:left-[16px] xl:left-[18px] 2xl:left-[21px] 3xl:left-[25px] my-[auto] inset-y-[0]"
              alt="Vector"
            />
            <Input
              className="bg-gray_50 placeholder:bg-transparent border-0 font-inter font-normal lg:pb-[6px] xl:pb-[7px] pb-[8.13px] 2xl:pb-[8px] 3xl:pb-[9px] lg:pl-[45px] xl:pl-[51px] pl-[57.98999500000001px] 2xl:pl-[58px] 3xl:pl-[69px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] pt-[9.25px] 2xl:pt-[9px] rounded-radius5 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left placeholder:text-teal_900 text-teal_900 w-[100%]"
              name="Group51"
              placeholder={`Easy`}
            ></Input>
          </div>
        </Column>
        <Column className="bg-white_A700 items-center justify-start lg:pb-[16px] xl:pb-[18px] pb-[21px] 3xl:pb-[25px] pr-[1px] w-[100%]">
          <Row className="bg-white_A700 border-bw03 border-solid border-teal_50 items-center justify-end xl:pl-[112px] pl-[126px] 3xl:pl-[151px] lg:pl-[98px] xl:pr-[105px] pr-[119px] 3xl:pr-[142px] lg:pr-[92px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] shadow-bs3 w-[100%]">
            <Column className="font-inter items-center lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[9%]">
              <Text className="font-bold lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Overview`}</Text>
              <Line className="bg-green_600 h-[4px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius20 w-[94%]" />
            </Column>
            <Button
              className="bg-green_600 font-poppins font-semibold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] 3xl:ml-[1033px] lg:ml-[669px] xl:ml-[765px] ml-[861px] mt-[1px] pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius10 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[6%]"
              onClick={handleNavigate2}
            >{`Edit`}</Button>
            <Button className="border-bw12 border-red_A700 border-solid font-poppins font-semibold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] mt-[1px] pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius10 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-red_A700 w-[6%]">{`Delete`}</Button>
          </Row>
        </Column>
        <Stack className="3xl:h-[353px] lg:h-[347px] xl:h-[354px] h-[360px] 2xl:h-[361px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
          <Text className="absolute font-medium lg:leading-lh21 xl:leading-lh24 2xl:leading-lh28 leading-lh2800 3xl:leading-lh33 left-[9%] text-bluegray_600 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left top-[0] tracking-ls1 w-[66%]">
            {
              <>
                {`Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.`}
                <br />
                {``}
                <br />
                {` An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.`}
                <br />
                {``}
                <br />
                {`Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.`}
              </>
            }
          </Text>
        </Stack>
      </Column>
    </>
  );
};

export default DetailPagePage;
