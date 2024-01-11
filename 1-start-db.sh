podman run \
	--cgroup-manager=cgroupfs  \
	-d \
	--rm \
	-e POSTGRES_USER=postgres \
	-e POSTGRES_PASSWORD=1234 \
    -p 5432:5432 \
	--network "host" \
	--privileged \
	--mount type=bind,source=./DatabaseFolder,target=/var/lib/postgresql/data  \
	--name postgres_it \
	postgres
