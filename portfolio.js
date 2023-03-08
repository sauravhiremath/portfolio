import emoji from 'react-easy-emoji'
import en from './locale/en.json'

const current_locale = en

export const about = {
  display: true,
  name: current_locale.about.name,
  title: current_locale.about.title,
  description: emoji(current_locale.about.description),
  subheadings: current_locale.about.headers,
}

export const workExperience = {
  title: current_locale.work_experience.title,
  experiences: current_locale.work_experience.experiences,
}

export const technologies = {
  heading: current_locale.technologies.heading,
  frameworks: current_locale.technologies.frameworks,
}

export const testimonials = current_locale.testimonials.map(
  ({ name, company, description, image, hidden }) => {
    return {
      name,
      company,
      description,
      image,
      hidden,
    }
  },
)

export const { journey, blogs, contact } = current_locale
