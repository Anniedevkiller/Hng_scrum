import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";

const OurHistory = () => {
  // const root = "https://ik.imagekit.io/cocroooiz/about/";

  const images = ["/images/about/history-4.png?updatedAt=1702015609410", "/images/about/goal2.png?updatedAt=1702198957831"];

  return (
    <PageLayer id="history">
      <Text size="42" tag="h2">
        Our history: where it all began
      </Text>

      <Text size="20" className="mt-6">
        {`Monika Kindergarten, initiated in 1981, served as a foundational step towards improving the educational landscape and, subsequently, the living conditions of the community it aimed to impact. As the kindergarten gained traction and demonstrated success in providing early childhood education, the need for expansion became evident. The project garnered attention and support, leading to the establishment of the Monika Kindergarten Förderverein e.V. in 1994.`}
        <br />
        <br />
        {`The creation of the Förderverein e.V. was driven by a desire to formalise and consolidate efforts to enhance education in Africa, specifically in Nigeria's South-South Region. Recognising the crucial role education plays in elevating living standards, the Förderverein e.V. committed itself to supporting and advancing the Monika Kindergarten and Elementary School in Ikot Ekpene, Nigeria. This initiative aimed not only to provide quality education but also to address the broader socio-economic challenges faced by the local population.`}
        <br />
        <br />
        {`Over the course of nearly thirty decades, the Förderverein e.V. has collaborated closely with local partners to execute a range of charitable projects. One notable achievement includes funding building expansions for Monika Kindergarten and Elementary School, which enabled the institution to accommodate more students and enhance its educational facilities.`}
        <br />
        <br />
        {`The Förderverein e.V.'s impact extends beyond Ikot Ekpene, reaching Usaka, Nigeria, where they have funded the establishment of primary and secondary schools. Additionally, their commitment to holistic development led to partnerships with international organisations, resulting in the sponsorship of vocational training centres in villages. These centres contribute to skill development and empowerment, aligning with the organisation's broader mission to uplift disadvantaged communities.`}
        <br />
        <br />

        {`Among the diverse projects undertaken by the Förderverein e.V., notable efforts include the funding of St. Paul Comprehensive Secondary School in Ikot Ekpene. This secondary school initiative reinforces the organisation's commitment to providing a comprehensive education continuum, ensuring that students have opportunities for continued growth beyond the elementary level.`}
        <br />
        <br />

        {`The Förderverein e.V. has not limited its contributions to infrastructure alone. The NGO has facilitated the donation of wheelchairs, provided school fee support to indigent children, and sponsored skilled training programs. These endeavours reflect a multifaceted approach to education and community development, addressing both immediate needs and long-term aspirations.`}
        <br />
        <br />

        {`In summary, the history of the Monika Kindergarten Förderverein e.V. is deeply intertwined with the evolution of the Monika Kindergarten and Elementary School in Ikot Ekpene, Nigeria. The decision to establish a kindergarten in 1981 laid the groundwork for a comprehensive commitment to education and community development. The Förderverein e.V., formed in 1994, stands as a testament to the enduring dedication to improving the lives of the poor and disadvantaged in Nigeria, making significant strides in education and beyond over its near 30-year history.`}
      </Text>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-1 gap-10">
        {images.map((img, idx) => (
          <LazyImage
            key={img + idx}
            className="brightness-90"
            style={{ height: "clamp(260px, 50vw, 500px)", width: "100%", maxWidth: "776px" }}
            src={img}
            // src={root + img}
            // blur={root + "tr:w-50,h-50/" + img}
          />
        ))}
      </div>
    </PageLayer>
  );
};

export default OurHistory;
