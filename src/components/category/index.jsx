import React from "react";
import { Container, Wrapper } from "./style";
import Slider from "react-slick";
import CategoryCard from "../categoryCard";
import { Icons } from "../categoryCard/style";

// const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 4,
  speed: 500,
  dots: true,
};
const Category = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  // console.log(data);

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
          <CategoryCard backImg={""} title={"Office"} icon={<Icons.Office />} />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Category;

//  <CategoryCard backImg={img1} title={"Houses"} icon={<Icons.Home />} />
//           <CategoryCard
//             backImg={img2}
//             title={"Apartment"}
//             icon={<Icons.Apart />}
//           />
//           <CategoryCard
//             backImg={img3}
//             title={"Office"}
//             icon={<Icons.Office />}
//           />
//           <CategoryCard backImg={img4} title={"Villa"} icon={<Icons.Villa />} />
//         </div>

//          <div>
//           <CategoryCard backImg={img1} title={"Houses"} icon={<Icons.Home />} />
//           <CategoryCard
//             backImg={img2}
//             title={"Apartment"}
//             icon={<Icons.Apart />}
//           />
//           <CategoryCard
//             backImg={img3}
//             title={"Office"}
//             icon={<Icons.Office />}
//           />
//           <CategoryCard backImg={img4} title={"Villa"} icon={<Icons.Villa />} />
