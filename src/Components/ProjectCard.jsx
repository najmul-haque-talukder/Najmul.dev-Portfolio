import React from 'react';

const ProjectCard = ({ title, desc, img, tech, liveLink, codeLink }) => {
  return (
    <div>
      <div className="border border-gray-500 rounded-lg bg-white/10 text-gray-200 h-120 hover:scale-103 duration-1000">
        {/* Project Image */}
        <div>
          <img
            src={img}
            className="rounded-t-lg w-full h-60 bg-cover"
            alt={title}
          />
        </div>

        {/* Project Details */}
        <div className="p-5">
          <p className="font-semibold text-xl text-white pb-2">{title}</p>

          <p className="text-sm border-b pb-2 border-gray-500">
            Technology:{" "}
            <span className="font-semibold text-white">
              {tech[0]}, {tech[1]}, {tech[2]}
            </span>
          </p>

          <p className="text-sm pt-2">{desc}</p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between py-4">
            <button className="hover:scale-101 duration-900 text-black bg-white rounded-md px-3 py-2">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </button>

            <button className="hover:scale-101 duration-900 border rounded-md px-3 py-2">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                Project Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
