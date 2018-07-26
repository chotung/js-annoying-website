# Potentially Annoying Website

## Objectives

- Add event listeners to the DOM
- Fetch data from an API
- Select, insert, update, or remove elements from the DOM

## Requirements

### Display first post

When the page loads, make a GET request to the `/articles/1` endpoint and put the first article on the page!

#### Events

`DOMContentLoaded`

### Signup Form

When a user tries to leave the page, display a signup form to get them to sign up to your site's newsletter!

When a user submits the form, send a POST request to the `/subscriptions` route.

When a user clicks the `x` button, hide the modal.

#### Events

`mouseout`
`click`

### Forever scroll

When a user scrolls down to the bottom of the page, the application loads the next post and puts it on the page.
