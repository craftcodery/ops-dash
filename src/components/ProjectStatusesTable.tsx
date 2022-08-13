import React from 'react';
import Project from '@/models/Project';

interface ProjectStatusesTableProps {
  projects: Project[];
}

const ProjectStatusesTable: React.FC<ProjectStatusesTableProps> = ({
  projects,
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 border-y border-gray-300">
      <tbody className="divide-y divide-gray-200 bg-white">
        {projects.map((project) => (
          <tr key={project.id} className="divide-x divide-gray-200">
            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
              {project.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectStatusesTable;
