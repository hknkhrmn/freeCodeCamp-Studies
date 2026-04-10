const normalizeUnits = (manifest) => {
  const copy = { ...manifest };
  if (copy.unit === "lb") {
    copy.weight = Math.round(copy.weight * 0.45 * 100) / 100;
    copy.unit = "kg";
  }
  return copy;
};

const validateManifest = (manifest) => {
  const errors = {};

  // containerId: pozitif tam sayı olmalı
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination: boşluk temizlendikten sonra boş olmayan string
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight: pozitif sayı, NaN olmamalı
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit: "kg" veya "lb" olmalı
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat: boolean olmalı
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

const processManifest = (manifest) => {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};