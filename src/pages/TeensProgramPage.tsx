import PageBanner from '@/components/shared/PageBanner';
import CourseOverview from '@/components/programs/teens/CourseOverview';
import LearningOutcomes from '@/components/programs/teens/LearningOutcomes';
import TeachingMethod from '@/components/programs/teens/TeachingMethod';
import LearningRoadmap from '@/components/programs/teens/LearningRoadmap';
import MidPageCTA from '@/components/programs/teens/MidPageCTA';

export default function TeensProgramPage() {
  return (
    <>
      <PageBanner
        badge="11-15 tuổi"
        title="Tiếng Anh Thiếu niên"
        subtitle="Tăng tốc tiếng Anh - Chuẩn bị hành trang cho những bước nhảy vọt."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167436/kindy_slide3.webp"
        imageAlt="Học sinh 11-15 tuổi học tiếng Anh tại ILE"
        fullBleed={true}
      />
      <CourseOverview />
      <LearningOutcomes />
      <TeachingMethod />
      <LearningRoadmap />
      <MidPageCTA />
    </>
  );
}
