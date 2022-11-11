import { event } from 'nextjs-google-analytics'

export function contactLinkClickEvent (type: string) {
  event('contact_link_click', {
    type
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