# PODMAN

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

Run an Image in a Container

```sh
podman run --name <container_name> -p 3000:3000 <image_name>
```

To see Containers running

```sh
podman ps -a
```

To Stop a Container

```sh
podman container stop <id>
```

To Start a Container

```sh
podman start <container_name>
```
