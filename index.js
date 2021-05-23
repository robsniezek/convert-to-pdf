const glob = require('glob');
const fs = require('fs');
const path = require('path');

const files = glob.sync(
	// UPDATE DIRECTORY LOCATION
	'./TowerTrack/**/Documents/*'
	// './TowerTrack/Test/Documents/*'

	// 'C:/Users/rober/Downloads/Firmex 21-05-23 172504/Due Diligence/TowerTrack/**/Documents/*'
);
// console.log(files);

files.forEach(file => {
	console.log('from: ', file);
	// const changedDirectory = file;
	const changedDirectory = file.replace('original-directory', 'pdfs');

	if (!path.extname(file)) {
		changedFilename = changedDirectory.replace(
			path.basename(file),
			path.basename(file) + '.pdf'
		);
	} else {
		changedFilename = file;
	}

	console.log('to: ', changedFilename);
	fs.renameSync(file, changedFilename);
});
