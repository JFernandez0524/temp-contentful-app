import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    <section className='projects'>
      <h2>Loading....</h2>
    </section>;
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return (
            <div key={id} className='project'>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <img className='img' src={img} alt={title} />
                <h5>{title}</h5>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
