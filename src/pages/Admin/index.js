import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SelectBox } from "../../components/SelectBox/index";
const AdminPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const handleNavigate1 = () => navigate("/");

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
        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[31%]">
          <Input
            className="absolute placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            name="Group2"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder={`Add Name`}
          ></Input>
        </Stack>
        <Text className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Start Date`}</Text>
        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[31%]">
          <Input
            onChange={(e) => {
              setStart(e.target.value);
              console.log(e.target.value);
            }}
            value={start}
            type="date"
            className="absolute placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            name="Group2"
            placeholder={`Add start date`}
          ></Input>
        </Stack>
        <Text className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`End Date`}</Text>
        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[31%]">
          <Input
            onChange={(e) => setEnd(e.target.value)}
            value={end}
            type="date"
            className="absolute placeholder:bg-transparent bg-transparent border border-gray_400 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10.375px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            name="Group3"
            placeholder={`Add end date`}
          ></Input>
        </Stack>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[57%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Description`}</Text>
          <Column className="lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="lg:h-[196px] xl:h-[225px] h-[252px] 2xl:h-[253px] 3xl:h-[303px] object-cover w-[100%]"
            />
          </Column>
        </Column>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[16%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Image`}</Text>
          <div className="3xl:mt-[22px] lg:mt-[14px] mt-[19px] w-[100%] xl:mt-[16px] input-wrap">
            <input
              type="file"
              className="lg:h-[100%] xl:h-[100%] h-[100%] 2xl:h-[100%] 3xl:h-[100%] object-cover w-[100%] opacity-0 absolute inset-y-[0] my-[auto] cursor-pointer"
            />
            <Image
              src={"images/img_vector.svg"}
              className="absolute right-[74.84px] lg:right-[58px] xl:right-[66px] 2xl:right-[74px] 3xl:right-[89px] my-[auto] inset-y-[0]"
              alt="Vector"
            />
            <Button className="bg-gray_100 border border-bluegray_100 border-solid font-medium lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:pr-[144px] xl:pr-[165px] pr-[186.33999999999997px] 2xl:pr-[186px] 3xl:pr-[223px] lg:py-[11px] xl:py-[12px] py-[14.545px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius5 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[100%]">{`Upload`}</Button>
          </div>
        </Column>
        <Column className="items-start justify-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[16%]">
          <Text className="font-medium text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Level Type`}</Text>
          <Column className="lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Stack className="lg:h-[31px] xl:h-[35px] rounded-radius5 h-[39px] border border-bluegray_100 border-solid 2xl:h-[40px] 3xl:h-[47px] w-[100%]">
              <SelectBox
                onChange={(e) => setType(e.target.value)}
                value={type}
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
            className="common-pointer bg-green_600 font-medium lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius10 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[91%]"
            onClick={handleNavigate1}
          >{`Create Challenge`}</Button>
        </Column>
      </Column>
    </>
  );
};

export default AdminPage;
