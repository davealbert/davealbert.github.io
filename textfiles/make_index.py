from os import listdir, stat
from time import time, ctime

print "<html><body>"
print "<style> td { padding-left: 20px; } .right { text-align: right;} </style>"
print "<p><i>Last updated: {0}</i></p>\n".format(ctime(time()))
print "<table style=\"\">"
print "<tr><td><b>Name</b></td><td><b>Size</b></td><td><b>Modified</b></td></tr>"

for f in listdir("."):
    if f.find('.txt') >= 0:
        st = stat(f)
        modifyTime = ctime(st.st_mtime)
        print "<tr><td><a href=\"{0}\">{0}<a></td><td class=\"right\">{1}B</td><td>{2}</td></tr>".format(f, st.st_size, modifyTime)
print "</table>"
print "</body></html>"
