import tornado.ioloop
import tornado.web

import os
import sys


class StaticHandler(tornado.web.StaticFileHandler):
  def parse_url_path(self, url_path):
    if not url_path or url_path.endswith('/'):
      url_path = url_path + 'index.html'
    return url_path


application = tornado.web.Application([
    (r"/(.*)", StaticHandler, {"path": os.getcwd() + "/dist"})
])

print("### Server Starting ###")
while True:
  try:
    application.listen(80)
    tornado.ioloop.IOLoop.current().start()
  except KeyboardInterrupt:
    print("### Server Closed ###")
    sys.exit(0)
  except:
    print("### Restarting Server ###")
