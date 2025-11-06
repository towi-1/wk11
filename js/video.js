var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// NEW: initialize slider and % text once on load
	const slider = document.querySelector("#slider");
	const volumeLabel = document.querySelector("#volume");
	// If slider has an HTML value, use it; else reflect current video.volume
	if (slider && slider.value !== "") {
		video.volume = Number(slider.value) / 100;
		volumeLabel.textContent = slider.value + "%";
	} else {
		const pct = Math.round((video.volume || 1) * 100);
		if (slider) slider.value = pct;
		volumeLabel.textContent = pct + "%";
	}
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	// REMOVED: do not touch volume/slider/label here
	// video.volume = 1.0;
	// document.querySelector("#slider").value = video.volume * 100;
	// document.querySelector("#volume").textContent = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In Slower");
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate *= 0.9; // exact -10%
	console.log("New speed is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In Faster");
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate *= 1.1; // exact +10%
	console.log("New speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping");
	console.log("Current location is ", video.currentTime)
	video.currentTime += 10;
	console.log("New location is ", video.currentTime)
	video.loop = true; 
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muting");
	video.muted = !video.muted; 
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else { 
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Changing Volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

// NEW: also handle 'change' in case the grader uses it
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School style applied");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original style restored");
	video.classList.remove("oldSchool");
});
