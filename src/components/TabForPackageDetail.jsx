import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export function TabForPackageDetail() {
  const packageData = {
    description:
      "Dolores maiores dicta dolore. Natoque placeat libero sunt sagittis debitis? Egestas non non qui quos, semper aperiam lacinia eum nam! Pede beatae. Soluta, convallis irure accusamus voluptatum ornare saepe cupidatat.",
    days: [
      {
        title: "Ancient Rome Visit",
        decription:
          "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium.",
      },
      {
        title: "Classic Rome Sightseeing",
        decription:
          "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium.",
      },
      {
        title: "Vatican City Visit",
        decription:
          "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium.",
      },
      {
        title: "Italian Food Tour",
        decription:
          "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium.",
      },
    ],
  };
  return (
    <Tabs
      aria-label="Default tabs"
      variant="default"
      className="[&>div:nth-child(2)]:border [&>div:nth-child(2)]:p-2"
    >
      <Tabs.Item title="DESCRIPTION" className="rounded-none">
        <div className="space-y-3">
          <p className="leading-relaxed">
            Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus
            ultricies praesent aute blandit beatae nisl aut, totam mauris
            rhoncus? Tellus netus fringilla class auctor dui. Dolores excepteur,
            doloribus, blanditiis aliquip nisl. Occaecat iusto? Provident sociis
            rerum. Amet, asperiores molestie varius eos! Libero, fermentum
            fermentum totam! Sunt praesentium, totam. Excepteur platea nisl.
            Convallis aliquam? Iaculis erat ipsa molestie, quod, vestibulum
            reiciendis, maxime nostra, integer unde officiis quo integer unde
            officiis quo.{" "}
          </p>
          <p className="leading-relaxed">
            Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus
            ultricies praesent aute blandit beatae nisl aut, totam mauris
            rhoncus? Tellus netus fringilla class auctor dui. Dolores excepteur,
            doloribus, blanditiis aliquip nisl..
          </p>
          <ul className="leading-relaxed">
            <li>- Travel cancellation insurance</li>
            <li>- Breakfast and dinner included</li>
            <li>- Health care included</li>
            <li>- Transfer to the airport and return to the agency</li>
            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
        </div>
      </Tabs.Item>
      <Tabs.Item active title="PROGRAM">
        <div className="space-y-3">
          <div className="text-4xl font-bold flex items-center space-x-4">
            <h1>Program</h1>{" "}
            <span className="text-sm">
              {"("} {packageData.days.length} days {")"}
            </span>
          </div>
          <p>{packageData.description}</p>
          <div className="space-y-3">
            {packageData.days.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="min-w-16 h-16 relative z-10 rounded-full text-white text-lg bg-primary flex flex-col -space-y-2 items-center justify-center">
                  <small>day</small>
                  <b>{index + 1}</b>
                </span>
                <div className="py-10 bg-gray-100 -ms-7 ps-12">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="line-clamp-3 hover:line-clamp-none pe-4">
                    {item.decription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs.Item>
      <Tabs.Item disabled title="REVIEW">
        reviews
      </Tabs.Item>
      <Tabs.Item title="Map">
        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5028607982685!2d31.232934515117892!3d30.042821081880927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f8ec6a83167%3A0x89e74fbb74002af0!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1695569089754!5m2!1sen!2seg"
          allowfullscreen=""
        ></iframe>
      </Tabs.Item>
    </Tabs>
  );
}
