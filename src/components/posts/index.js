import { Container } from "@mui/material";
import PostCard from "./post";

export default function PostsList() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(254,246,243,1) 57%, rgba(27,45,46,1) 43%)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          paddingX: "48px !important",
          paddingY: "32px",
        }}
      >
        <PostCard
          img="https://res.cloudinary.com/goodsted/image/upload/v1653921813/UserUploads/mps8ixnsuyixu35pqc9q.png"
          title="How to Make an Impact and Feel Great about it - Finding your Actigai"
          person="Nicky Dunlop"
          personImg="https://res.cloudinary.com/goodsted/image/upload/v1593073111/UserUploads/sow5vo6dgcszvkh8w8c5.png"
          date="27 May"
        />
        <PostCard
          img="https://res.cloudinary.com/goodsted/image/upload/v1652091871/UserUploads/wfzpnlryfnjttjwd9olk.jpg"
          title="How the Aster Foundation scaled their impact programme using Goodsted"
          person="Selin Yigitbasi-Ducker"
          personImg="https://res.cloudinary.com/goodsted/image/upload/q_auto,f_auto/v1623824073/master/pseybhgbjnsp8wp12z64.jpg"
          date="9 May"
        />
        <PostCard
          img="https://res.cloudinary.com/goodsted/image/upload/v1635149574/UserUploads/lhg69iv9knry2jy1cryu.jpg"
          title="Time to spruce up your profile 😍"
          person="Chloe Bousquet-Chavanne"
          personImg="https://res.cloudinary.com/goodsted/image/upload/q_auto,f_auto/v1623416273/master/vvozeeroldbjuwxfunju.jpg"
          date="14 Oct"
        />
      </Container>
    </div>
  );
}
