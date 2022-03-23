export function getPeople() {
  return fetch("/api/birthdays", {
    mode: "cors",
  }).then((res) => res.json());
}

export function deletePerson(id) {
  return fetch(`api/birthdays/delete/${id}`, {
    method: "DELETE",
  }).then((res) => res.json);
}

export function addPerson(data) {
  return fetch("/api/birthdays/addPerson", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  }).then((res) => res.json);
}
