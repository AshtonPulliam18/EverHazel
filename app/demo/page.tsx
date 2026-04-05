import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { DemoSite } from '../../components/demo/DemoSite';

export default function DemoPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Demo"
          title="Explore the EverHazel Aesthetics demo site."
          description="This embedded experience shows a demo, three-page med spa website with a modern, conversion-ready flow."
        />

        <div className="mt-10 rounded-3xl border border-moss/20 bg-moss/10 p-6 shadow-ring">
          <DemoSite />
        </div>
      </Container>
    </div>
  );
}
