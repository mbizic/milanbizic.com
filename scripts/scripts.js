<script>
  str = str.replace(/"(?=\w|$)/g, "&#8220;");
  str = str.replace(/(?<=\w|^)"/g, "&#8221;");
  str = str.replace(/(?<=[\w,.?!\)]|^)"/g, "&#8221;");
</script>
