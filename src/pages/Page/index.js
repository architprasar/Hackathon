import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { SelectBox } from "../../components/SelectBox";

const Page = () => {
  const navigate = useNavigate();

  const handleNavigate2 = () => navigate("/");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-start justify-start mx-[auto] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="bg-white_A700 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] pb-[12.89px] 2xl:pb-[12px] 3xl:pl-[106px] lg:pl-[69px] xl:pl-[79px] pl-[89px]  w-[100%]">
            <Image
              src={"images/img_mainlogowith_2.png"}
              className="absolute lg:h-[30px] ml-[40px] xl:h-[34px] h-[38.11px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] left-[0] my-[auto] object-contain w-[6%]"
              alt="mainlogowith"
            />
          </Stack>
          <Column className="bg-gray_50 items-center justify-start lg:pb-[28px] xl:pb-[32px] pb-[37px] 3xl:pb-[44px] 3xl:pl-[106px] lg:pl-[69px] xl:pl-[79px] pl-[89px] xl:pr-[1018px] pr-[1145px] 3xl:pr-[1374px] lg:pr-[890px] lg:pt-[31px] xl:pt-[36px] pt-[41px] 3xl:pt-[49px] w-[100%]">
            <Text className="font-bold text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left w-[auto]">{`Challenge Details`}</Text>
          </Column>
        </Column>
        <Text className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Challenge Name`}</Text>
        <Input
          className="placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_800 text-gray_800 text-left w-[31%]"
          name="Group12"
          placeholder={`Data Sprint 72 - Butterfly Identification`}
        ></Input>
        <Text className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Start Date`}</Text>
        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[31%]">
          <Input
            value={"2022-06-10"}
            type="date"
            className="absolute placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            name="Group2"
            placeholder={`17th Jun'22 09:00 PM`}
          ></Input>
        </Stack>
        <Text className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`End Date`}</Text>
        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[31%]">
          <Input
            value={"2022-09-10"}
            type="date"
            className="absolute placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            name="Group2"
            placeholder={`17th Jun'22 09:00 PM`}
          ></Input>
        </Stack>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[57%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Description`}</Text>
          <Column className="lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Stack className="lg:h-[196px] xl:h-[225px] h-[252px] 2xl:h-[253px] 3xl:h-[303px] w-[100%]">
              <textarea
                value={"Identify the class to which each butterfly belongs to"}
                className="lg:h-[196px] xl:h-[225px] h-[252px] 2xl:h-[253px] 3xl:h-[303px] object-cover w-[100%]"
              />
            </Stack>
          </Column>
        </Column>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[21%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Image`}</Text>
          <Column className="lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Column className="bg-gray_50 border border-gray_50 border-solid items-center justify-start lg:pb-[22px] xl:pb-[25px] pb-[29px] 3xl:pb-[34px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] rounded-radius10 w-[100%]">
              <Stack className="xl:h-[109px] h-[122.39px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[96px] mx-[auto] w-[84%]">
                <Image
                  src={"images/img_rectangle6672.png"}
                  className="absolute xl:h-[109px] h-[122.39px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[96px] inset-[0] object-cover rounded-radius15 w-[100%]"
                  alt="Rectangle6672"
                />
                <Image
                  src={"images/img_rectangle6673.svg"}
                  className="absolute xl:h-[109px] h-[122.39px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[96px] inset-[0] object-cover rounded-radius15 w-[100%]"
                  alt="Rectangle6673"
                />
              </Stack>
              <Row className="items-start justify-start lg:mt-[21px] relative xl:mt-[24px] mt-[27.61px] 2xl:mt-[27px] 3xl:mt-[33px] lg:pl-[16px] xl:pl-[18px] pl-[21px] 3xl:pl-[25px] lg:pr-[109px] xl:pr-[125px] pr-[141px] 3xl:pr-[169px] w-[100%]">
                <Image
                  src={"images/img_biimagefill.svg"}
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] my-[1px] object-contain lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"
                  alt="biimagefill"
                />
                <Text className="font-medium lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-green_600 text-left w-[auto]">{`Change image`}</Text>
                <Image
                  src={"images/img_vector_1.svg"}
                  className="3xl:h-[11px] lg:h-[7px] h-[8.75px] xl:h-[8px] 2xl:h-[9px] xl:mb-[2px] lg:mb-[2px] mb-[3.25px] 3xl:mb-[3px] 2xl:mb-[3px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain w-[3%]"
                  alt="Vector"
                />
                 <input
              type="file"
              className="lg:h-[100%] absolute xl:h-[100%] h-[100%] 2xl:h-[100%] 3xl:h-[100%] object-cover w-[100%] opacity-0 left-0 inset-y-[0] my-[auto] cursor-pointer"
            />
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[16%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Level Type`}</Text>
          <Column className="lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Stack className="lg:h-[31px] xl:h-[35px] rounded-radius5 h-[39px] border border-bluegray_100 border-solid 2xl:h-[40px] 3xl:h-[47px] w-[100%]">
              <SelectBox
        
                options={[
                  { value: "Easy", label: "Easy" },
                  { value: "Medium", label: "Medium" },
                  { value: "Hard", label: "Hard" },
                ]}
                className="font-medium  h-[100%] grid items-center font-medium ml-[19px] bold w-[auto]"
              ></SelectBox>
            </Stack>
          </Column>
          <Button
            className="common-pointer bg-green_600 font-medium lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius10 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[91%]"
            onClick={handleNavigate2}
          >{`Save Changes`}</Button>
        </Column>
      </Column>
    </>
  );
};

export default Page;
