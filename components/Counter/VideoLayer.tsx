export default function VideoLayer(): JSX.Element {
  return (
    <video loop autoPlay muted poster="/img/counter_thumbnail.png">
      <source src="/video/counter_main.mp4" type="video/mp4" />
    </video>
  );
}
