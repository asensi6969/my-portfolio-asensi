import React from 'react'

const Experiences = () => {

  const experiences = [
    {
      position: 'Junior Application Developer',
      company: 'iRely Phillipines Inc',
      period: 'June 2023- May 2026',
      description:
        'Contribute to the maintenance and development of software systems, including the Contracts Module for a CTRM Software System and the Accounts Receivable Module for an Enterprise Petroleum Distribution Software, with extensive experience in delivering full-stack features such as maintenance screens, search screens, reports, and other business functionalities, while applying strong problem-solving skills in troubleshooting, debugging, and analyzing applications to deliver reliable solutions within tight deadlines, collaborating closely with business analysts, project managers, and implementation consultants to align technical solutions with business requirements, leveraging AI-assisted development tools such as Cursor and Atlassian Rovo to improve productivity, accelerate deliverables, and enhance code quality, and utilizing Azure cloud technologies, CI/CD pipelines, and DevOps tools to support reliable application delivery, deployment, and infrastructure management.'
    },
    {
      position: 'Computer Programmer',
      company: 'University of San Agustin',
      period: 'June 2022 - April 2023',
      description:
        'Developed a web-based system from the ground up called NSTAR Index (NRCP Scientist, Technology, Engineers, Artists, and Researchers Index) to manage and organize researchers publications, patents, products, and other research-related information, while also creating a web scraping tool using Simple HTML DOM to efficiently retrieve and automate the collection of researchers publication data from Google Scholar.'
    },
  ]

  return (
    <div className='text-white flex flex-col items-center'>

      {/* Page Title */}
      <h1 className='text-4xl flex font-bold mb-10 text-center'>
        My Experiences
      </h1>

      {/* Experience List */}
      <div className='w-full max-w-4xl flex flex-col gap-6'>

        {experiences.map((experience, index) => (

          <div
            key={index}
            className='w-full bg-[#0d1f16] border border-[#1c3a2b] rounded-xl p-6 hover:border-green-500 transition duration-300'
          >

            {/* Job Header */}
            <div className='flex justify-between items-start gap-4'>

              <div>
                <h2 className='text-2xl font-semibold'>
                  {experience.position}
                </h2>

                <p className='text-gray-400 mt-1'>
                  {experience.company}
                </p>
              </div>

              <p className='text-gray-400 whitespace-nowrap'>
                {experience.period}
              </p>

            </div>

            {/* Job Description */}
            <p className='text-gray-300 mt-5 leading-7'>
              {experience.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Experiences
