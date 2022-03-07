import HeaderBlog from "../../../components/BlogComponents/HeaderBlog/HeaderBlog";
import {
  TitleBlog,
  Parrafo,
  SubtitleBlog,
  ImageWrapper,
  DateAndViews,
  UpdatedBlog,
  Info,
} from "../../../components/BlogComponents/BlogPageStyles";

const InfoBlog = {
  title: "Laravel 9:Manejo de rutas basico en laravel",
  type: "Tutorial",
  date: "Feb 22, 2022",
  autor: "Gonzalo Axel Valdez",
  duration: "25 min practica",
  link: "#",
  description: "Rutas en laravel ... ",
  imgUrl: "/imagesblog/routeslaravel/routes.jpg",
};

const BlogComponent = (
  <>
    <HeaderBlog
      type={InfoBlog.type}
      date={InfoBlog.date}
      duration={InfoBlog.duration}
      autor={InfoBlog.autor}
    />
    <TitleBlog>{InfoBlog.title}</TitleBlog>
    <Info>
      <DateAndViews>
        <span>{InfoBlog.date}</span>
        <span>.</span>
        <span>1 views</span>
      </DateAndViews>
      <UpdatedBlog>(Updated Today)</UpdatedBlog>
    </Info>
    <ImageWrapper src={InfoBlog.imgUrl}></ImageWrapper>
    <SubtitleBlog>Rutas en Laravel 9 </SubtitleBlog>
    <Parrafo>En desarrollo ...</Parrafo>
  </>
);

export default {
  info: InfoBlog,
  page: BlogComponent,
};
