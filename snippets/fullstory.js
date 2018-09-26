// This is an example script - don't forget to change it!
// The session URL is available once the _fs_ready event occurs, hence the callback.
window["_fs_ready"] = function() {
  var sessionUrl = FS.getCurrentSessionURL()
  var sessionUrlAtCurrentTime = FS.getCurrentSessionURL(true)
  // TODO: Save the session link to play it again later.
}

//   #!/usr/bin/python
// # TODO: Obtain API key and user email to lookup.
// headers = {'Authorization':'Basic {}'.format(api_key)}
// response = requests.get('https://www.fullstory.com/api/v1/sessions?email='+user_email, headers=headers)
// json_data = json.loads(response.text)
// for session in json_data:
//   # TODO: Do something with the session links.
