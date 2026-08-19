CMS.registerEditorComponent({
      id: "image-ref",
      label: "Image (insert by ID)",
      fields: [
        { name: "id", label: "Image ID (must match one in the Images list)", widget: "string" }
      ],
      pattern: /^{{< image (.+?) >}}$/,
      fromBlock: function (match) {
        return { id: match[1] };
      },
      toBlock: function (obj) {
        return `{{< image ${obj.id} >}}`;
      },
      toPreview: function (obj) {
        return `📷 Image: ${obj.id}`;
      }
    });