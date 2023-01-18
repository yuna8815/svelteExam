/** @type {import('./$types').LayoutLoad} */
export function load({route}) {
  return {
    section: {
      '/user/list': '환자 리스트'
    },
    route: route.id
  }
}
