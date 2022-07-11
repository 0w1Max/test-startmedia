<?php include './data/data_cars.php'; ?>
<?php include './data/data_attempts.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Database</title>
</head>
<body>
    <div class="content-data">

        <?php $array = []; ?>

        <?php foreach($data_cars as $key => $value): ?>
            <div class="col-grid cars">
                <?php foreach($value as $k => $item): ?>
                    <div class="grid-item <?php echo $k ?>" data-<?php echo $k ?>="<?php echo $item ?>">
                    <b><?php echo "$k: " ?></b><?php echo $item ?></div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>

        <?php foreach($data_attempts as $key => $value): ?>
            <b><?php echo $key + 1 ?></b>
            <div class="col-grid results">
                <?php foreach($value as $k => $item): ?>

                    <?php array_push($array, $k); ?>

                    <div class="grid-item <?php echo $k ?>" data-<?php echo $k ?>="<?php echo "$item" ?>">
                    <b><?php echo "$k: " ?></b><?php echo $item ?></div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>

    </div>
    
    <div class="content">

    </div>

    <script type="module" src="./js/app.js"></script>
</body>
</html>