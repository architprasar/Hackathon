import React from "react";

import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { Line } from "../../components/Line";
import { List } from "../../components/List";
import { Input } from "../../components/Input";
import MultipleSelectCheckmarks from "../../components/MultiSelect";
import { useNavigate } from "react-router-dom";

const ListPagePage = () => {
  const navigate = useNavigate();
  const handleNavigate2 = () => navigate("/admin");
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] pb-[12.89px] 2xl:pb-[12px] 3xl:pl-[106px] lg:pl-[69px] xl:pl-[79px] pl-[89px]  w-[100%]">
          <Image
            src={"images/img_mainlogowith_2.png"}
            className="absolute lg:h-[30px] ml-[40px] xl:h-[34px] h-[38.11px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] left-[0] my-[auto] object-contain w-[6%]"
            alt="mainlogowith"
          />
        </Stack>
        <Stack className="lg:h-[490px] xl:h-[560px] h-[629px] 2xl:h-[630px] 3xl:h-[756px] w-[100%]">
          <Stack className="absolute lg:h-[490px] xl:h-[560px] h-[629px] 2xl:h-[630px] 3xl:h-[756px] inset-[0] w-[100%]">
            <Row className="absolute bg-teal_900 bottom-[0] inset-x-[0] items-start justify-start 3xl:pb-[111px] lg:pb-[72px] xl:pb-[82px] pb-[93px] lg:pl-[111px] xl:pl-[127px] pl-[143px] 3xl:pl-[171px] lg:pr-[460px] xl:pr-[526px] pr-[592px] 3xl:pr-[710px] lg:pt-[100px] xl:pt-[100px] pt-[100px] 3xl:pt-[120px] top-[1%] w-[100%]">
              <div className="bg-amber_300 xl:h-[104px] h-[115.91px] 2xl:h-[116px] 3xl:h-[140px] lg:h-[91px] lg:mb-[180px] xl:mb-[206px] mb-[232.09px] 2xl:mb-[232px] 3xl:mb-[278px] w-[1%]"></div>
              <Column className="items-start justify-start lg:ml-[40px] xl:ml-[46px] ml-[52.29px] 2xl:ml-[52px] 3xl:ml-[62px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[45%]">
                <Text className="font-semibold lg:leading-lh43 xl:leading-lh49 2xl:leading-lh56 leading-lh5600 3xl:leading-lh67 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left text-white_A700 w-[100%]">{`Accelerate Innovation with Global AI Challenges`}</Text>
                <Text className="font-medium lg:leading-lh21 xl:leading-lh24 2xl:leading-lh28 leading-lh2800 3xl:leading-lh33 lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_200 text-left w-[83%]">{`AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.`}</Text>
                <Button
                  className="bg-white_A700 font-semibold lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius10 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-teal_900 w-[50%]"
                  onClick={handleNavigate2}
                >{`Create Challenge`}</Button>
              </Column>
            </Row>
          </Stack>
          <Image
            src={"images/img_picsart04140.png"}
            className="absolute bottom-[15%] lg:h-[282px] xl:h-[323px] h-[362.06px] 2xl:h-[363px] 3xl:h-[435px] object-contain right-[11%] w-[23%]"
            alt="PicsArt04140"
          />
        </Stack>
        <Stack className="bg-teal_901 font-inter lg:h-[156px] xl:h-[100px] h-[px] 2xl:h-[150px] 3xl:h-[200px] pb-[10px] 3xl:pb-[10px] lg:pl-[142px] xl:pl-[162px] pl-[183px] 3xl:pl-[219px] lg:pr-[141px] xl:pr-[161px] pr-[182px] 3xl:pr-[218px] pt-[10px] 3xl:pt-[10px]  w-[100%]">
          <Row className=" h-[100%] grid grid-cols-5 gap-x-10 items-center justify-center w-[100%]">
            <div className="flex w-[auto]">
              <Image
                src={"images/img_group100000251.svg"}
                className="lg:h-[43px] xl:h-[49px] mr-[10px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Group100000251"
              />
              <Column className="items-start justify-start my-[1px] w-[100%]">
                <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700 w-[auto]">{`100K+`}</Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[auto] ">{`AI model submissions`}</Text>
              </Column>
            </div>
            <Line className="bg-gray_401 lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] w-[1px]" />
            <div className="flex ">
              <Image
                src={"images/img_group100000251_1.svg"}
                className="lg:h-[43px] left xl:h-[49px] mr-[15px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Group100000251"
              />
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700 w-[auto]">{`100+`}</Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[auto]">{`AI Challenges hosted`}</Text>
              </Column>
            </div>
            <Line className="bg-gray_401 lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] w-[1px]" />
            <div className="flex ">
              <Image
                src={"images/img_group100000251_2.svg"}
                className="lg:h-[43px] xl:h-[49px] mr-[15px] h-[55px] 2xl:h-[56px] 3xl:h-[67px]  object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Group100000251"
              />
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700 w-[auto]">{`50K+`}</Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[auto]">{`Data Scientists`}</Text>
              </Column>
            </div>
          </Row>
          <Row className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[61%]"></Row>
        </Stack>
        <Stack className="font-poppins 3xl:h-[1084px] lg:h-[702px] xl:h-[803px] h-[902px] 2xl:h-[903px] w-[100%]">
          <Column className="absolute bg-white_A700 inset-[0] items-center justify-start lg:pb-[612px] xl:pb-[700px] pb-[788px] 3xl:pb-[946px] lg:pl-[205px] xl:pl-[234px] pl-[264px] 3xl:pl-[316px] lg:pr-[204px] xl:pr-[233px] pr-[263px] 3xl:pr-[315px] 3xl:pt-[108px] lg:pt-[70px] xl:pt-[80px] pt-[90px] w-[100%]">
            <Text className="font-semibold mx-[auto] text-black_900 text-center lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 w-[auto]">
              <span className="text-black_900 font-poppins">
                <>{`Why Participate in `}</>
              </span>
              <span className="text-green_600 font-poppins">
                <>{`AI Challenges?`}</>
              </span>
            </Text>
          </Column>
          <List
            className="absolute bottom-[14%] lg:gap-[27px] xl:gap-[31px] gap-[35px] 3xl:gap-[42px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[78%]"
            orientation="horizontal"
          >
            <Column className="xl:mb-[1px] lg:mb-[1px] mb-[2px] w-[100%]">
              <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] w-[100%]">
                <Image
                  src={"images/img_group717.svg"}
                  className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] inset-[0] object-cover w-[100%]"
                  alt="Group717"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[87%]">
                  <Image
                    src={"images/img_carbonnotebook.svg"}
                    className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] object-contain lg:w-[33px] xl:w-[38px] w-[43px] 3xl:w-[51px]"
                    alt="carbonnotebook"
                  />
                  <Text className="font-semibold lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[56%]">{`Prove your skills`}</Text>
                  <Text className="font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-bluegray_600 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]">{`Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.`}</Text>
                </Column>
              </Stack>
              <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[100%]">
                <Image
                  src={"images/img_group717_1.svg"}
                  className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] inset-[0] object-cover w-[100%]"
                  alt="Group717"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[88%]">
                  <Image
                    src={"images/img_robot.svg"}
                    className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] object-contain lg:w-[36px] xl:w-[41px] w-[47px] 3xl:w-[56px]"
                    alt="Robot"
                  />
                  <Text className="font-semibold lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:mt-[3px] lg:mt-[3px] mt-[4px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[56%]">{`Challenge yourself`}</Text>
                  <Text className="font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-bluegray_600 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[99%]">{`There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.`}</Text>
                </Column>
              </Stack>
            </Column>
            <Column className="w-[100%]">
              <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] w-[100%]">
                <Image
                  src={"images/img_group717_2.svg"}
                  className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] inset-[0] object-cover w-[100%]"
                  alt="Group717"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[89%]">
                  <Image
                    src={"images/img_vector_3.svg"}
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:ml-[1px] lg:ml-[1px] ml-[2px] object-contain w-[8%]"
                    alt="Vector"
                  />
                  <Text className="font-semibold lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[88%]">{`Learn from community`}</Text>
                  <Text className="font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-bluegray_600 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]">{`One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.`}</Text>
                </Column>
              </Stack>
              <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[100%]">
                <Image
                  src={"images/img_group717_3.svg"}
                  className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] inset-[0] object-cover w-[100%]"
                  alt="Group717"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[90%]">
                  <Image
                    src={"images/img_identificationc.svg"}
                    className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                    alt="IdentificationC"
                  />
                  <Text className="font-semibold lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[54%]">{`Earn recognition`}</Text>
                  <Text className="font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] text-bluegray_600 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[99%]">{`You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.`}</Text>
                </Column>
              </Stack>
            </Column>
          </List>
        </Stack>
        <Column className="bg-teal_901 font-poppins items-center justify-center 3xl:pb-[117px] lg:pb-[76px] xl:pb-[87px] pb-[98px] lg:pt-[56px] xl:pt-[64px] pt-[72px] 3xl:pt-[86px] lg:px-[185px] xl:px-[211px] px-[238px] 3xl:px-[285px] w-[100%]">
          <Text className="font-semibold mx-[auto] text-center lg:text-fs21 xl:text-fs24 text-fs28 3xl:text-fs33 text-white_A700 w-[auto]">{`Explore Challenges`}</Text>
          <Row className="font-inter items-center justify-center lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] mx-[auto] w-[67%]">
            <div className="bg-transparent border-0 w-[86%] input-wrap">
              <Image
                src={"images/img_vector_4.svg"}
                className="absolute h-[14.36px] left-[39.04001px] bg-transparent border-0 lg:h-[12px] lg:left-[30px] xl:h-[13px] xl:left-[34px] 2xl:h-[15px] 2xl:left-[39px] 3xl:h-[18px] 3xl:left-[46px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Input
                className="placeholder:bg-transparent bg-white_A700 border-0 font-light lg:pb-[15px] xl:pb-[17px] pb-[19.6px] 2xl:pb-[19px] 3xl:pb-[23px] 3xl:pl-[110px] lg:pl-[71px] xl:pl-[82px] pl-[92.44001000000003px] 2xl:pl-[92px] lg:pt-[14px] xl:pt-[16px] pt-[18.04px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius12 shadow-bs lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_601 text-gray_601 text-left w-[100%]"
                name="Group28"
                placeholder={`Search`}
              ></Input>
            </div>
            <Stack className="bg-white_A700 border border-gray_201 border-solid lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] rounded-radius12 w-[20%]">
              <MultipleSelectCheckmarks />
            </Stack>
          </Row>
        </Column>
        <footer className="w-[100%]">
          <Column className="bg-teal_900 xl:pb-[111px] pb-[125px] 3xl:pb-[150px] lg:pb-[97px] lg:pt-[58px] xl:pt-[66px] pt-[75px] 3xl:pt-[90px] pl-[20px] pr-[20px] w-[100%]">
            <Row className="lg:gap-[42px] xl:gap-[48px] gap-[55px] 3xl:gap-[66px] grid grid-cols-3 items-center justify-center w-[100%]">
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_1.png"}
                    className="absolute lg:h-[136px] xl:h-[155px] h-[174px] 2xl:h-[175px] 3xl:h-[209px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-center justify-start mx-[auto] w-[69%]">
                  <Text className="bg-amber_300_3f font-inter font-normal mx-[auto] not-italic lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-black_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 w-[auto]">{`Upcoming`}</Text>
                  <Text className="font-poppins font-semibold lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Data Science Bootcamp - Graded Datathon`}</Text>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[auto]">{`Starts in`}</Text>
                  <Row className="font-poppins items-center justify-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pl-[60px] 3xl:pl-[72px] pr-[59.93px] 2xl:pr-[59px] 3xl:pr-[71px] lg:px-[46px] xl:px-[53px] w-[100%]">
                    <Text className="font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto]">{`00:15:22`}</Text>
                  </Row>
                  <Row className="font-inter items-center justify-center xl:mt-[1px] lg:mt-[1px] mt-[2.08px] 3xl:mt-[2px] 2xl:mt-[2px] mx-[auto] w-[52%]">
                    <Text className="font-medium mb-[1px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Days`}</Text>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[12px] ml-[14.23px] 2xl:ml-[14px] 3xl:ml-[17px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Hours`}</Text>
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Mins`}</Text>
                  </Row>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />

                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_2.png"}
                    className="absolute lg:h-[136px] xl:h-[155px] h-[174px] 2xl:h-[175px] 3xl:h-[209px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-center justify-start mx-[auto] w-[69%]">
                  <Text className="bg-amber_300_3f font-inter font-normal mx-[auto] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_700 w-[auto]">{`Upcoming`}</Text>
                  <Text className="font-poppins font-semibold lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Data Sprint 72 - Butterfly Identification`}</Text>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[auto]">{`Starts in`}</Text>
                  <Row className="font-poppins items-center justify-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pl-[60px] 3xl:pl-[72px] pr-[59.93px] 2xl:pr-[59px] 3xl:pr-[71px] lg:px-[46px] xl:px-[53px] w-[100%]">
                    <Text className="font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto]">{`00:12:34`}</Text>
                  </Row>
                  <Row className="font-inter items-center justify-center xl:mt-[1px] lg:mt-[1px] mt-[2.08px] 3xl:mt-[2px] 2xl:mt-[2px] mx-[auto] w-[52%]">
                    <Text className="font-medium mb-[1px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Days`}</Text>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[12px] ml-[14.23px] 2xl:ml-[14px] 3xl:ml-[17px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Hours`}</Text>
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Mins`}</Text>
                  </Row>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_3.png"}
                    className="absolute lg:h-[136px] xl:h-[155px] h-[174px] 2xl:h-[175px] 3xl:h-[209px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-center justify-start mx-[auto] w-[69%]">
                  <Text className="bg-green_600_3d font-inter font-normal mx-[auto] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-green_600 w-[auto]">{`Active`}</Text>
                  <Text className="font-poppins font-semibold lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Data Sprint 71 - Weather Recognition`}</Text>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[auto]">{`Ends in`}</Text>
                  <Row className="font-poppins items-center justify-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pl-[60px] 3xl:pl-[72px] pr-[59.93px] 2xl:pr-[59px] 3xl:pr-[71px] lg:px-[46px] xl:px-[53px] w-[100%]">
                    <Stack className="lg:h-[24px] xl:h-[27px] h-[29.92px] 2xl:h-[30px] 3xl:h-[36px] w-[19%]">
                      <Text className="absolute font-semibold left-[0] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto]">{`01:17:10`}</Text>
                    </Stack>
                  </Row>
                  <Row className="font-inter items-center justify-center xl:mt-[1px] lg:mt-[1px] mt-[2.08px] 3xl:mt-[2px] 2xl:mt-[2px] mx-[auto] w-[52%]">
                    <Text className="font-medium mb-[1px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Days`}</Text>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[12px] ml-[14.23px] 2xl:ml-[14px] 3xl:ml-[17px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Hours`}</Text>
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Mins`}</Text>
                  </Row>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
            </Row>
            <Row className="lg:gap-[42px] xl:gap-[48px] gap-[55px] 3xl:gap-[66px] grid grid-cols-3 items-center justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_4.png"}
                    className="absolute lg:h-[136px] xl:h-[155px] h-[174px] 2xl:h-[175px] 3xl:h-[209px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-center justify-start mx-[auto] w-[69%]">
                  <Text className="bg-green_600_3d font-inter font-normal mx-[auto] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-green_600 w-[auto]">{`Active`}</Text>
                  <Text className="font-poppins font-semibold lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Data Sprint 70-Airline Passenger Satisfaction`}</Text>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[auto]">{`Ends in`}</Text>
                  <Row className="font-poppins items-center justify-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pl-[60px] 3xl:pl-[72px] pr-[59.93px] 2xl:pr-[59px] 3xl:pr-[71px] lg:px-[46px] xl:px-[53px] w-[100%]">
                    <Text className="font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto]">{`00:11:27`}</Text>
                  </Row>
                  <Row className="font-inter items-center justify-center xl:mt-[1px] lg:mt-[1px] mt-[2.08px] 3xl:mt-[2px] 2xl:mt-[2px] mx-[auto] w-[52%]">
                    <Text className="font-medium mb-[1px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Days`}</Text>
                    <Text className="font-medium lg:ml-[11px] xl:ml-[12px] ml-[14.23px] 2xl:ml-[14px] 3xl:ml-[17px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Hours`}</Text>
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_802 w-[auto]">{`Mins`}</Text>
                  </Row>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti_3.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_5.png"}
                    className="absolute lg:h-[136px] xl:h-[155px] h-[174px] 2xl:h-[175px] 3xl:h-[209px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[69%]">
                  <Column className="font-poppins items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[15px] xl:px-[17px] grid items-center justify-center px-[20px] 3xl:px-[24px] w-[100%]">
                    <Text className="bg-deep_orange_A400_2b font-inter font-normal lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_700 w-[auto]">{`Past`}</Text>
                  </Column>
                  <Text className="font-poppins font-semibold lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Engineering Graduates Employment Outcomes`}</Text>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[100%] ">{`Ended on`}</Text>
                  <Column className="font-poppins items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[15px] xl:px-[17px] grid items-center justify-center px-[20px] 3xl:px-[24px] w-[100%]">
                    <Text className="font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto] grid items-center justify-center">{`16th May'22 09:00 PM`}</Text>
                  </Column>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti_4.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] shadow-bs1 w-[100%]  bg-white rounded-radius15">
                <Stack className="absolute lg:h-[368px] xl:h-[421px] h-[473px] 2xl:h-[474px] 3xl:h-[568px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle6672_6.png"}
                    className="absolute lg:h-[137px] xl:h-[157px] h-[175.48px] 2xl:h-[176px] 3xl:h-[211px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                    alt="Rectangle6672"
                  />
                </Stack>
                <Column className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[69%]">
                  <Column className="font-poppins items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[15px] xl:px-[17px] grid items-center justify-center px-[20px] 3xl:px-[24px] w-[100%]">
                    <Text className="bg-deep_orange_A400_2b font-inter font-normal lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] xl:pt-[1px] lg:pt-[1px] pt-[2px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius5 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_700 w-[auto]">{`Past`}</Text>
                  </Column>
                  <Column className="font-poppins items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[15px] xl:px-[17px] grid items-center justify-center px-[20px] 3xl:px-[24px] w-[100%]">
                    <Text className="font-poppins font-semibold lg:leading-lh20 mt-[20px] xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[14px] xl:mt-[16px] mt-[30px] 3xl:mt-[22px] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Travel Insurance Claim Prediction`}</Text>
                  </Column>
                  <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 w-[100%] ">{`Ended on`}</Text>
                  <Column className="font-poppins items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px] w-[100%]">
                    <Text className="font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_801 text-left w-[auto]">{`16th May'22 09:00 PM`}</Text>
                  </Column>
                  <Row
                    onClick={() => {
                      navigate("/detailpage");
                    }}
                    className="bg-green_600 font-poppins items-center justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.55px] 2xl:pr-[21px] 3xl:pr-[25px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius10 w-[74%]"
                  >
                    <Image
                      src={"images/img_charmcircleti_5.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="charmcircleti"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[auto]">{`Participate Now`}</Text>
                  </Row>
                </Column>
              </Stack>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ListPagePage;
