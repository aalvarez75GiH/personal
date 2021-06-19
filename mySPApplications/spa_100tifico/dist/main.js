(()=>{"use strict";var __webpack_modules__={755:()=>{eval('\n;// CONCATENATED MODULE: ./src/templates/header.js\nconst headerx = () => {\n  const view = `\n    <div class="header-main">\n    <div class="header-logo">\n        <h1>\n            <a href="/">\n                100tifico\n            </a>\n        </h1>\n    </div>\n    <div>\n    \n    </div class="header-nav">\n        <a href="#/about/">\n            About\n        </a>\n\n    </div>\n    \n    `;\n  return view;\n};\n\n/* harmony default export */ const header = (headerx);\n;// CONCATENATED MODULE: ./src/utils/getData.js\nconst API = \'https://rickandmortyapi.com/api/character/\';\n\nconst getData = async id => {\n  const apiURL = id ? `${API}${id}` : API;\n\n  try {\n    const response = await fetch(apiURL);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log(\'Fetch Error...\', error);\n  }\n};\n\n/* harmony default export */ const utils_getData = (getData);\n;// CONCATENATED MODULE: ./src/pages/home.js\n\n\n\nconst home = async () => {\n  const data = await utils_getData();\n  const view = `\n    <div class="characters">\n    ${data.results.map(character => `\n    <article class="character-item">\n            <a href="#/${character.id}/">\n                <img src="${character.image}" alt="${character.name}">\n                <h2>${character.name}</h2>\n            </a>\n        </article>\n    `).join(\'\')}\n    </div>    \n    `;\n  return view;\n};\n\n/* harmony default export */ const pages_home = (home);\n;// CONCATENATED MODULE: ./src/utils/getHash.js\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split(\'/\')[1] || \'/\';\n\n/* harmony default export */ const utils_getHash = (getHash);\n;// CONCATENATED MODULE: ./src/pages/character.js\n\n\n\nconst character = async () => {\n  const id = utils_getHash();\n  const data = await utils_getData(id);\n  const view = `\n    <div class="characters-inner">\n        <article class="character-card">\n            <img src="${data.image}" alt="name">\n            <h2>${data.name}</h2>\n    \n        </article>\n        <article class="character-card">\n            <h3>Episodes: ${data.episode.length}</h3>\n            <h3>Status: ${data.status}</h3>\n            <h3>Species: ${data.species}</h3>\n            <h3>Gender: ${data.gender}</h3>\n            <h3>Origin: ${data.origin.name}</h3>\n            <h3>Last location: ${data.location.name}</h3>\n            \n        </article>\n\n    </div>\n    \n    `;\n  return view;\n};\n\n/* harmony default export */ const pages_character = (character);\n;// CONCATENATED MODULE: ./src/pages/error404.js\nconst error404 = () => {\n  const view = `\n        <div class="error404">\n            <h2> 404 Not Found </h2>\n\n        </div>\n    \n    `;\n  return view;\n};\n\n/* harmony default export */ const pages_error404 = (error404);\n;// CONCATENATED MODULE: ./src/utils/resolveRoutes.js\nconst resolveRoutes = route => {\n  console.log(route);\n\n  if (route.length <= 3) {\n    let validRoute = route === \'/\' ? route : \'/:id\';\n    return validRoute;\n  }\n\n  return `/${route}`;\n};\n\n/* harmony default export */ const utils_resolveRoutes = (resolveRoutes);\n;// CONCATENATED MODULE: ./src/routes/index.js\n\n\n\n\n\n\nconst routes = {\n  \'/\': pages_home,\n  \'/:id\': pages_character,\n  \'/home\': pages_home\n};\n\nconst router = async () => {\n  const header_view =  false || document.getElementById(\'header\');\n  const content_view =  false || document.getElementById(\'content\');\n  header_view.innerHTML = await header();\n  let hash = utils_getHash();\n  console.log(hash);\n  let route = await utils_resolveRoutes(hash);\n  let render = routes[route] ? routes[route] : pages_error404;\n  content_view.innerHTML = await render();\n};\n\n/* harmony default export */ const src_routes = (router);\n;// CONCATENATED MODULE: ./src/index.js\n\nwindow.addEventListener(\'load\', src_routes);\nwindow.addEventListener(\'hashchange\', src_routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTAwdGlmaWNvLy4vc3JjL3RlbXBsYXRlcy9oZWFkZXIuanM/YzhkMyIsIndlYnBhY2s6Ly8xMDB0aWZpY28vLi9zcmMvdXRpbHMvZ2V0RGF0YS5qcz8wOTk4Iiwid2VicGFjazovLzEwMHRpZmljby8uL3NyYy9wYWdlcy9ob21lLmpzPzFhYjYiLCJ3ZWJwYWNrOi8vMTAwdGlmaWNvLy4vc3JjL3V0aWxzL2dldEhhc2guanM/YzI2MyIsIndlYnBhY2s6Ly8xMDB0aWZpY28vLi9zcmMvcGFnZXMvY2hhcmFjdGVyLmpzPzZjNjEiLCJ3ZWJwYWNrOi8vMTAwdGlmaWNvLy4vc3JjL3BhZ2VzL2Vycm9yNDA0LmpzPzRkMDYiLCJ3ZWJwYWNrOi8vMTAwdGlmaWNvLy4vc3JjL3V0aWxzL3Jlc29sdmVSb3V0ZXMuanM/MjRiYiIsIndlYnBhY2s6Ly8xMDB0aWZpY28vLi9zcmMvcm91dGVzL2luZGV4LmpzPzVmMTMiLCJ3ZWJwYWNrOi8vMTAwdGlmaWNvLy4vc3JjL2luZGV4LmpzP2Q5YmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyeCA9ICgpID0+IHtcbiAgY29uc3QgdmlldyA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLW1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxvZ29cIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAxMDB0aWZpY29cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgIFxuICAgIDwvZGl2IGNsYXNzPVwiaGVhZGVyLW5hdlwiPlxuICAgICAgICA8YSBocmVmPVwiIy9hYm91dC9cIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvYT5cblxuICAgIDwvZGl2PlxuICAgIFxuICAgIGA7XG4gIHJldHVybiB2aWV3O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyeDsiLCJjb25zdCBBUEkgPSAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJztcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIGlkID0+IHtcbiAgY29uc3QgYXBpVVJMID0gaWQgPyBgJHtBUEl9JHtpZH1gIDogQVBJO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0ZldGNoIEVycm9yLi4uJywgZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImltcG9ydCBnZXREYXRhIGZyb20gXCIuLi91dGlscy9nZXREYXRhXCI7XG5pbXBvcnQgY2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlclwiO1xuXG5jb25zdCBob21lID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCB2aWV3ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXJzXCI+XG4gICAgJHtkYXRhLnJlc3VsdHMubWFwKGNoYXJhY3RlciA9PiBgXG4gICAgPGFydGljbGUgY2xhc3M9XCJjaGFyYWN0ZXItaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvJHtjaGFyYWN0ZXIuaWR9L1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjaGFyYWN0ZXIuaW1hZ2V9XCIgYWx0PVwiJHtjaGFyYWN0ZXIubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8aDI+JHtjaGFyYWN0ZXIubmFtZX08L2gyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCkuam9pbignJyl9XG4gICAgPC9kaXY+ICAgIFxuICAgIGA7XG4gIHJldHVybiB2aWV3O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJjb25zdCBnZXRIYXNoID0gKCkgPT4gbG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnNwbGl0KCcvJylbMV0gfHwgJy8nO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRIYXNoOyIsImltcG9ydCBnZXREYXRhIGZyb20gXCIuLi91dGlscy9nZXREYXRhXCI7XG5pbXBvcnQgZ2V0SGFzaCBmcm9tIFwiLi4vdXRpbHMvZ2V0SGFzaFwiO1xuXG5jb25zdCBjaGFyYWN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGlkID0gZ2V0SGFzaCgpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShpZCk7XG4gIGNvbnN0IHZpZXcgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNoYXJhY3RlcnMtaW5uZXJcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjaGFyYWN0ZXItY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2V9XCIgYWx0PVwibmFtZVwiPlxuICAgICAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgXG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjaGFyYWN0ZXItY2FyZFwiPlxuICAgICAgICAgICAgPGgzPkVwaXNvZGVzOiAke2RhdGEuZXBpc29kZS5sZW5ndGh9PC9oMz5cbiAgICAgICAgICAgIDxoMz5TdGF0dXM6ICR7ZGF0YS5zdGF0dXN9PC9oMz5cbiAgICAgICAgICAgIDxoMz5TcGVjaWVzOiAke2RhdGEuc3BlY2llc308L2gzPlxuICAgICAgICAgICAgPGgzPkdlbmRlcjogJHtkYXRhLmdlbmRlcn08L2gzPlxuICAgICAgICAgICAgPGgzPk9yaWdpbjogJHtkYXRhLm9yaWdpbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aDM+TGFzdCBsb2NhdGlvbjogJHtkYXRhLmxvY2F0aW9uLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2FydGljbGU+XG5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBgO1xuICByZXR1cm4gdmlldztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYXJhY3RlcjsiLCJjb25zdCBlcnJvcjQwNCA9ICgpID0+IHtcbiAgY29uc3QgdmlldyA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yNDA0XCI+XG4gICAgICAgICAgICA8aDI+IDQwNCBOb3QgRm91bmQgPC9oMj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICBgO1xuICByZXR1cm4gdmlldztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9yNDA0OyIsImNvbnN0IHJlc29sdmVSb3V0ZXMgPSByb3V0ZSA9PiB7XG4gIGNvbnNvbGUubG9nKHJvdXRlKTtcblxuICBpZiAocm91dGUubGVuZ3RoIDw9IDMpIHtcbiAgICBsZXQgdmFsaWRSb3V0ZSA9IHJvdXRlID09PSAnLycgPyByb3V0ZSA6ICcvOmlkJztcbiAgICByZXR1cm4gdmFsaWRSb3V0ZTtcbiAgfVxuXG4gIHJldHVybiBgLyR7cm91dGV9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVSb3V0ZXM7IiwiaW1wb3J0IGhlYWRlciBmcm9tICcuLi90ZW1wbGF0ZXMvaGVhZGVyJztcbmltcG9ydCBob21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGNoYXJhY3RlciBmcm9tICcuLi9wYWdlcy9jaGFyYWN0ZXInO1xuaW1wb3J0IGVycm9yNDA0IGZyb20gJy4uL3BhZ2VzL2Vycm9yNDA0JztcbmltcG9ydCBnZXRIYXNoIGZyb20gJy4uL3V0aWxzL2dldEhhc2gnO1xuaW1wb3J0IHJlc29sdmVSb3V0ZXMgZnJvbSAnLi4vdXRpbHMvcmVzb2x2ZVJvdXRlcyc7XG5jb25zdCByb3V0ZXMgPSB7XG4gICcvJzogaG9tZSxcbiAgJy86aWQnOiBjaGFyYWN0ZXIsXG4gICcvaG9tZSc6IGhvbWVcbn07XG5cbmNvbnN0IHJvdXRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaGVhZGVyX3ZpZXcgPSBudWxsIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgY29udGVudF92aWV3ID0gbnVsbCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBoZWFkZXJfdmlldy5pbm5lckhUTUwgPSBhd2FpdCBoZWFkZXIoKTtcbiAgbGV0IGhhc2ggPSBnZXRIYXNoKCk7XG4gIGNvbnNvbGUubG9nKGhhc2gpO1xuICBsZXQgcm91dGUgPSBhd2FpdCByZXNvbHZlUm91dGVzKGhhc2gpO1xuICBsZXQgcmVuZGVyID0gcm91dGVzW3JvdXRlXSA/IHJvdXRlc1tyb3V0ZV0gOiBlcnJvcjQwNDtcbiAgY29udGVudF92aWV3LmlubmVySFRNTCA9IGF3YWl0IHJlbmRlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsImltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVzXCI7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJvdXRlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHJvdXRlcik7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///755\n')}},__webpack_exports__={};__webpack_modules__[755]()})();