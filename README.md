# PODMAN

https://github.com/containers/podman/blob/main/docs/tutorials/podman-for-windows.md

Start a Machine

```sh
podman machine start
```

To see machines status

```sh
podman machine list
```

Create an Image from the Dockerfile using

```sh
podman build -t <image_name> .
```

Check Images using

```sh
podman images
```

Run an Image in a Container (Container is the image ID)

```sh
podman run --name <container_name> -p 3000:3000 <image_name>
```

Delete an Image in a Container

```sh
podman rmi <image_id>
```

To see Containers running

```sh
podman ps -a
```

To Start a Container

```sh
podman start <container_name>
```

To Stop a Container

```sh
podman container stop <id>
```

To Remove a Container

```sh
podman container rm <id>
```