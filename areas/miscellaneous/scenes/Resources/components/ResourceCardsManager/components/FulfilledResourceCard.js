export default function FulfilledResourceCard({ resourceCardData }) {
  const { imageUrl, title, description, resourceUrl } = resourceCardData;

  return (
    <div className="w-full flex flex-col mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative" style={{ paddingBottom: "60%" }}>
        <img
          className="absolute w-full h-full object-cover object-center"
          src={imageUrl}
        />
      </div>
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm text-gray-300">{description}</div>
        <div className="flex flex-grow mt-4">
          <a
            className="text-sm text-blue-300 mt-auto"
            href={resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more...
          </a>
        </div>
      </div>
    </div>
  );
}
