"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "../atoms/Title";
import Improve from "../molecules/Improve"
import Image from "next/image";
import StackPageImage from "../../assets/images/stackpage.png"
import GuideImage from "../../assets/images/guides.png"
import WikiImage from "../../assets/images/wiki.png"
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "25rem",
}));

export default function MainForm() {
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Title>Topic</Title>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item>
            <div className="text-xl font-black m-4">기술 스택 / 작업 플로우</div>
            <Link href="./stack" passHref>
              <Image src={StackPageImage} alt="Stack Page" width={400} height={300} className="hover:scale-110 transition-transform duration-500"/>
            </Link>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>  
            <div className="text-xl font-black m-4">개발자 가이드 문서</div>
            <Link href="https://github.com/caramellateam/internal-guide/wiki/GUIDES/" passHref target="_blank">
                <Image src={GuideImage} alt="Guide Page" width={400} height={300} className="hover:scale-110 transition-transform duration-500"/>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div className="text-xl font-black m-4">WIKI</div>
          <Link href="https://github.com/caramellateam/internal-guide/wiki/" passHref target="_blank">
               <Image src={WikiImage} alt="wiki Page" width={400} height={300} className="hover:scale-110 transition-transform duration-500"/>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>연차 현황 알아보기</Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Improve/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
