import { event } from 'nextjs-google-analytics'

export function contactLinkClickEvent (type: string) {
  event('contact_link_click', {
    type
  })
}

export function projectClickEvent (type?: string) {
  event('project_click', {
    type
  })
}

export function projectLinkClickEvent (link?: string) {
  event('project_link_click', {
    link
  })
}

export function submitEvent (type: string) {
  event('submit_click', {
    type
  })
}

export function scrollEvent () {
  event('testimonials_scroll')
}